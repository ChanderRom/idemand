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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandCreateHotelsService
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
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateHotels = payload.map(hotel => IdemandHotel.register(
            hotel.id,
            hotel.name,
            hotel.totalRooms,
            hotel.bookedRooms,
            new IdemandHotelCreatedAt({ currentTimestamp: true }),
            new IdemandHotelUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateHotels,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddHotelsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const hotelsRegistered = this.publisher.mergeObjectContext(new IdemandAddHotelsContextEvent(aggregateHotels));

        hotelsRegistered.created(); // apply event to model events
        hotelsRegistered.commit(); // commit all events of model
    }
}
