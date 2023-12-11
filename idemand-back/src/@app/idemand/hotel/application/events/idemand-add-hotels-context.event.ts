import { IdemandCreatedHotelEvent, IdemandCreatedHotelsEvent, IdemandDeletedHotelEvent, IdemandDeletedHotelsEvent, IdemandHotel, IdemandUpdatedHotelEvent, IdemandUpdatedHotelsEvent } from '@app/idemand/hotel';
import { AggregateRoot } from '@nestjs/cqrs';

export class IdemandAddHotelsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: IdemandHotel[] = [],
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
            new IdemandCreatedHotelsEvent(
                this.aggregateRoots.map(hotel =>
                    new IdemandCreatedHotelEvent(
                        hotel.id.value,
                        hotel.name.value,
                        hotel.totalRooms.value,
                        hotel.bookedRooms.value,
                        hotel.createdAt?.value,
                        hotel.updatedAt?.value,
                        hotel.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new IdemandUpdatedHotelsEvent(
                this.aggregateRoots.map(hotel =>
                    new IdemandUpdatedHotelEvent(
                        hotel.id.value,
                        hotel.name.value,
                        hotel.totalRooms.value,
                        hotel.bookedRooms.value,
                        hotel.createdAt?.value,
                        hotel.updatedAt?.value,
                        hotel.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new IdemandDeletedHotelsEvent(
                this.aggregateRoots.map(hotel =>
                    new IdemandDeletedHotelEvent(
                        hotel.id.value,
                        hotel.name.value,
                        hotel.totalRooms.value,
                        hotel.bookedRooms.value,
                        hotel.createdAt?.value,
                        hotel.updatedAt?.value,
                        hotel.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
