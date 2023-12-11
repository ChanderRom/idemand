import { IdemandHotel, IdemandIHotelRepository, idemandMockHotelData } from '@app/idemand/hotel';
import {
    IdemandHotelBookedRooms,
    IdemandHotelCreatedAt,
    IdemandHotelDeletedAt,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
    IdemandHotelUpdatedAt,
} from '@app/idemand/hotel/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandMockHotelRepository extends MockRepository<IdemandHotel> implements IdemandIHotelRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'IdemandHotel';
    public collectionSource: IdemandHotel[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>idemandMockHotelData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(IdemandHotel.register(
                new IdemandHotelId(itemCollection.id),
                new IdemandHotelName(itemCollection.name),
                new IdemandHotelTotalRooms(itemCollection.totalRooms),
                new IdemandHotelBookedRooms(itemCollection.bookedRooms),
                new IdemandHotelCreatedAt(itemCollection.createdAt),
                new IdemandHotelUpdatedAt(itemCollection.updatedAt),
                new IdemandHotelDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
