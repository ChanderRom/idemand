import { IdemandAddHotelsContextEvent, IdemandHotel, IdemandIHotelRepository } from '@app/idemand/hotel';
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
export class IdemandUpdateHotelsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        payload: {
            id?: IdemandHotelId;
            name?: IdemandHotelName;
            totalRooms?: IdemandHotelTotalRooms;
            bookedRooms?: IdemandHotelBookedRooms;
        },
        queryStatement?: QueryStatement,
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

        // update
        await this.repository.update(
            hotel,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const hotels = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const hotelsRegister = this.publisher.mergeObjectContext(
            new IdemandAddHotelsContextEvent(hotels),
        );

        hotelsRegister.updated(); // apply event to model events
        hotelsRegister.commit(); // commit all events of model
    }
}
