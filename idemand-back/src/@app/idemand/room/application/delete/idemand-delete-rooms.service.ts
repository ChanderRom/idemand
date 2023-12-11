import { IdemandAddRoomsContextEvent, IdemandIRoomRepository } from '@app/idemand/room';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandDeleteRoomsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const rooms = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (rooms.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddRoomsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const roomsRegistered = this.publisher.mergeObjectContext(
            new IdemandAddRoomsContextEvent(rooms),
        );

        roomsRegistered.deleted(); // apply event to model events
        roomsRegistered.commit(); // commit all events of model
    }
}
