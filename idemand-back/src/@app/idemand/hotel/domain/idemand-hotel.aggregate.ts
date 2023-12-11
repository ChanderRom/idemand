/* eslint-disable key-spacing */
import { IdemandCreatedHotelEvent, IdemandDeletedHotelEvent, IdemandUpdatedHotelEvent } from '@app/idemand/hotel';
import {
    IdemandHotelBookedRooms,
    IdemandHotelCreatedAt,
    IdemandHotelDeletedAt,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
    IdemandHotelUpdatedAt,
} from '@app/idemand/hotel/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class IdemandHotel extends AggregateRoot
{
    id: IdemandHotelId;
    name: IdemandHotelName;
    totalRooms: IdemandHotelTotalRooms;
    bookedRooms: IdemandHotelBookedRooms;
    createdAt: IdemandHotelCreatedAt;
    updatedAt: IdemandHotelUpdatedAt;
    deletedAt: IdemandHotelDeletedAt;

    constructor(
        id: IdemandHotelId,
        name: IdemandHotelName,
        totalRooms: IdemandHotelTotalRooms,
        bookedRooms: IdemandHotelBookedRooms,
        createdAt: IdemandHotelCreatedAt,
        updatedAt: IdemandHotelUpdatedAt,
        deletedAt: IdemandHotelDeletedAt,
    )
    {
        super();
        this.id = id;
        this.name = name;
        this.totalRooms = totalRooms;
        this.bookedRooms = bookedRooms;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: IdemandHotelId,
        name: IdemandHotelName,
        totalRooms: IdemandHotelTotalRooms,
        bookedRooms: IdemandHotelBookedRooms,
        createdAt: IdemandHotelCreatedAt,
        updatedAt: IdemandHotelUpdatedAt,
        deletedAt: IdemandHotelDeletedAt,
    ): IdemandHotel
    {
        return new IdemandHotel(
            id,
            name,
            totalRooms,
            bookedRooms,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(hotel: IdemandHotel): void
    {
        this.apply(
            new IdemandCreatedHotelEvent(
                hotel.id.value,
                hotel.name.value,
                hotel.totalRooms.value,
                hotel.bookedRooms.value,
                hotel.createdAt?.value,
                hotel.updatedAt?.value,
                hotel.deletedAt?.value,
            ),
        );
    }

    updated(hotel: IdemandHotel): void
    {
        this.apply(
            new IdemandUpdatedHotelEvent(
                hotel.id?.value,
                hotel.name?.value,
                hotel.totalRooms?.value,
                hotel.bookedRooms?.value,
                hotel.createdAt?.value,
                hotel.updatedAt?.value,
                hotel.deletedAt?.value,
            ),
        );
    }

    deleted(hotel: IdemandHotel): void
    {
        this.apply(
            new IdemandDeletedHotelEvent(
                hotel.id.value,
                hotel.name.value,
                hotel.totalRooms.value,
                hotel.bookedRooms.value,
                hotel.createdAt?.value,
                hotel.updatedAt?.value,
                hotel.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            totalRooms: this.totalRooms.value,
            bookedRooms: this.bookedRooms.value,
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
            name: this.name.value,
            totalRooms: this.totalRooms.value,
            bookedRooms: this.bookedRooms.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
