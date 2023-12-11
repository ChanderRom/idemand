import { IdemandAddRoomsContextEvent, IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandUpdateRoomsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        payload: {
            id?: IdemandRoomId;
            type?: IdemandRoomType;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const room = IdemandRoom.register(
            payload.id,
            payload.type,
            null, // createdAt
            new IdemandRoomUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update
        await this.repository.update(
            room,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const rooms = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const roomsRegister = this.publisher.mergeObjectContext(
            new IdemandAddRoomsContextEvent(rooms),
        );

        roomsRegister.updated(); // apply event to model events
        roomsRegister.commit(); // commit all events of model
    }
}
