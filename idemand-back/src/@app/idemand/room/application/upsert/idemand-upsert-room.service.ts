import { IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandUpsertRoomService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        payload: {
            id: IdemandRoomId;
            type: IdemandRoomType;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const room = IdemandRoom.register(
            payload.id,
            payload.type,
            new IdemandRoomCreatedAt({ currentTimestamp: true }),
            new IdemandRoomUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                room,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const roomRegister = this.publisher.mergeObjectContext(
            room,
        );

        roomRegister.created(room); // apply event to model events
        roomRegister.commit(); // commit all events of model
    }
}
