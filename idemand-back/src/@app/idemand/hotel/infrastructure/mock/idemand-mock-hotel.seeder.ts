import { IdemandHotel, idemandMockHotelData } from '@app/idemand/hotel';
import {
    IdemandHotelBookedRooms,
    IdemandHotelCreatedAt,
    IdemandHotelDeletedAt,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
    IdemandHotelUpdatedAt,
} from '@app/idemand/hotel/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class IdemandMockHotelSeeder extends MockSeeder<IdemandHotel>
{
    public collectionSource: IdemandHotel[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const hotel of _.orderBy(idemandMockHotelData, ['id']))
        {
            this.collectionSource.push(
                IdemandHotel.register(
                    new IdemandHotelId(hotel.id),
                    new IdemandHotelName(hotel.name),
                    new IdemandHotelTotalRooms(hotel.totalRooms),
                    new IdemandHotelBookedRooms(hotel.bookedRooms),
                    new IdemandHotelCreatedAt({ currentTimestamp: true }),
                    new IdemandHotelUpdatedAt({ currentTimestamp: true }),
                    new IdemandHotelDeletedAt(null),
                ),
            );
        }
    }
}
