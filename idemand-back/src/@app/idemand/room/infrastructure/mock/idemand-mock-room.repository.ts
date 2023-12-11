import { IdemandIRoomRepository, idemandMockRoomData, IdemandRoom } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDate,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandMockRoomRepository extends MockRepository<IdemandRoom> implements IdemandIRoomRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'IdemandRoom';
    public collectionSource: IdemandRoom[];

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

        for (const itemCollection of <any[]>idemandMockRoomData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(IdemandRoom.register(
                new IdemandRoomId(itemCollection.id),
                new IdemandRoomType(itemCollection.type),
                new IdemandRoomPrice(itemCollection.price),
                new IdemandRoomDate(itemCollection.date),
                new IdemandRoomCreatedAt(itemCollection.createdAt),
                new IdemandRoomUpdatedAt(itemCollection.updatedAt),
                new IdemandRoomDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
