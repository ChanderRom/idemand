import { IdemandCreatedRoomEvent, IdemandCreatedRoomsEvent, IdemandDeletedRoomEvent, IdemandDeletedRoomsEvent, IdemandRoom, IdemandUpdatedRoomEvent, IdemandUpdatedRoomsEvent } from '@app/idemand/room';
import { AggregateRoot } from '@nestjs/cqrs';

export class IdemandAddRoomsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: IdemandRoom[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new IdemandCreatedRoomsEvent(
                this.aggregateRoots.map(room =>
                    new IdemandCreatedRoomEvent(
                        room.id.value,
                        room.type.value,
                        room.createdAt?.value,
                        room.updatedAt?.value,
                        room.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new IdemandUpdatedRoomsEvent(
                this.aggregateRoots.map(room =>
                    new IdemandUpdatedRoomEvent(
                        room.id.value,
                        room.type.value,
                        room.createdAt?.value,
                        room.updatedAt?.value,
                        room.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new IdemandDeletedRoomsEvent(
                this.aggregateRoots.map(room =>
                    new IdemandDeletedRoomEvent(
                        room.id.value,
                        room.type.value,
                        room.createdAt?.value,
                        room.updatedAt?.value,
                        room.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
