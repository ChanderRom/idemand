import { idemandMockRoomData, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDate,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class IdemandMockRoomSeeder extends MockSeeder<IdemandRoom>
{
    public collectionSource: IdemandRoom[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const room of _.orderBy(idemandMockRoomData, ['id']))
        {
            this.collectionSource.push(
                IdemandRoom.register(
                    new IdemandRoomId(room.id),
                    new IdemandRoomType(room.type),
                    new IdemandRoomPrice(room.price),
                    new IdemandRoomDate(room.date),
                    new IdemandRoomCreatedAt({ currentTimestamp: true }),
                    new IdemandRoomUpdatedAt({ currentTimestamp: true }),
                    new IdemandRoomDeletedAt(null),
                ),
            );
        }
    }
}
