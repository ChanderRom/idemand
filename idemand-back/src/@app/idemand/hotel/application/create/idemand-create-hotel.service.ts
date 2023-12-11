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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandCreateHotelService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        payload: {
            id: IdemandHotelId;
            name: IdemandHotelName;
            totalRooms: IdemandHotelTotalRooms;
            bookedRooms: IdemandHotelBookedRooms;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const hotel = IdemandHotel.register(
            payload.id,
            payload.name,
            payload.totalRooms,
            payload.bookedRooms,
            new IdemandHotelCreatedAt({ currentTimestamp: true }),
            new IdemandHotelUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            hotel,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const hotelRegister = this.publisher.mergeObjectContext(
            hotel,
        );

        hotelRegister.created(hotel); // apply event to model events
        hotelRegister.commit(); // commit all events of model
    }
}
