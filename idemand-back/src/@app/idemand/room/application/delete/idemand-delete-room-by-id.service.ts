import { IdemandIRoomRepository } from '@app/idemand/room';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandDeleteRoomByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        id: IdemandRoomId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const room = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                room.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const roomRegister = this.publisher.mergeObjectContext(room);

        roomRegister.deleted(room); // apply event to model events
        roomRegister.commit(); // commit all events of model
    }
}
