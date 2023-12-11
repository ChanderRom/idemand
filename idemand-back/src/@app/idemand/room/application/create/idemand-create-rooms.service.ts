import { IdemandAddRoomsContextEvent, IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDate,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandCreateRoomsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        payload: {
            id: IdemandRoomId;
            type: IdemandRoomType;
            price: IdemandRoomPrice;
            date: IdemandRoomDate;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateRooms = payload.map(room => IdemandRoom.register(
            room.id,
            room.type,
            room.price,
            room.date,
            new IdemandRoomCreatedAt({ currentTimestamp: true }),
            new IdemandRoomUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateRooms,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddRoomsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const roomsRegistered = this.publisher.mergeObjectContext(new IdemandAddRoomsContextEvent(aggregateRooms));

        roomsRegistered.created(); // apply event to model events
        roomsRegistered.commit(); // commit all events of model
    }
}
