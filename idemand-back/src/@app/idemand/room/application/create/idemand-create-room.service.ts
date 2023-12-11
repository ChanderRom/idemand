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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class IdemandCreateRoomService
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
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const room = IdemandRoom.register(
            payload.id,
            payload.type,
            payload.price,
            payload.date,
            new IdemandRoomCreatedAt({ currentTimestamp: true }),
            new IdemandRoomUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            room,
            {
                createOptions: cQMetadata?.repositoryOptions,
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
