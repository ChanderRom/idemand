/* eslint-disable key-spacing */
import { IdemandCreatedRoomEvent, IdemandDeletedRoomEvent, IdemandUpdatedRoomEvent } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class IdemandRoom extends AggregateRoot
{
    id: IdemandRoomId;
    type: IdemandRoomType;
    createdAt: IdemandRoomCreatedAt;
    updatedAt: IdemandRoomUpdatedAt;
    deletedAt: IdemandRoomDeletedAt;

    constructor(
        id: IdemandRoomId,
        type: IdemandRoomType,
        createdAt: IdemandRoomCreatedAt,
        updatedAt: IdemandRoomUpdatedAt,
        deletedAt: IdemandRoomDeletedAt,
    )
    {
        super();
        this.id = id;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: IdemandRoomId,
        type: IdemandRoomType,
        createdAt: IdemandRoomCreatedAt,
        updatedAt: IdemandRoomUpdatedAt,
        deletedAt: IdemandRoomDeletedAt,
    ): IdemandRoom
    {
        return new IdemandRoom(
            id,
            type,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(room: IdemandRoom): void
    {
        this.apply(
            new IdemandCreatedRoomEvent(
                room.id.value,
                room.type.value,
                room.createdAt?.value,
                room.updatedAt?.value,
                room.deletedAt?.value,
            ),
        );
    }

    updated(room: IdemandRoom): void
    {
        this.apply(
            new IdemandUpdatedRoomEvent(
                room.id?.value,
                room.type?.value,
                room.createdAt?.value,
                room.updatedAt?.value,
                room.deletedAt?.value,
            ),
        );
    }

    deleted(room: IdemandRoom): void
    {
        this.apply(
            new IdemandDeletedRoomEvent(
                room.id.value,
                room.type.value,
                room.createdAt?.value,
                room.updatedAt?.value,
                room.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            type: this.type.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            type: this.type.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
