import { IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDate,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandUpdateRoomByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        payload: {
            id: IdemandRoomId;
            type?: IdemandRoomType;
            price?: IdemandRoomPrice;
            date?: IdemandRoomDate;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const room = IdemandRoom.register(
            payload.id,
            payload.type,
            payload.price,
            payload.date,
            null, // createdAt
            new IdemandRoomUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            room,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const roomRegister = this.publisher.mergeObjectContext(
            room,
        );

        roomRegister.updated(room); // apply event to model events
        roomRegister.commit(); // commit all events of model
    }
}
