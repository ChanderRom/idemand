import { IdemandHotel, IdemandIHotelRepository } from '@app/idemand/hotel';
import {
    IdemandHotelBookedRooms,
    IdemandHotelCreatedAt,
    IdemandHotelDeletedAt,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
    IdemandHotelUpdatedAt,
} from '@app/idemand/hotel/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandUpdateHotelByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        payload: {
            id: IdemandHotelId;
            name?: IdemandHotelName;
            totalRooms?: IdemandHotelTotalRooms;
            bookedRooms?: IdemandHotelBookedRooms;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const hotel = IdemandHotel.register(
            payload.id,
            payload.name,
            payload.totalRooms,
            payload.bookedRooms,
            null, // createdAt
            new IdemandHotelUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            hotel,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const hotelRegister = this.publisher.mergeObjectContext(
            hotel,
        );

        hotelRegister.updated(hotel); // apply event to model events
        hotelRegister.commit(); // commit all events of model
    }
}
