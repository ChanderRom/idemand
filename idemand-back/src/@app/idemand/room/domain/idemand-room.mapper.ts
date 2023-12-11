import { IdemandRoom, IdemandRoomResponse } from '@app/idemand/room';
import {
    IdemandRoomCreatedAt,
    IdemandRoomDeletedAt,
    IdemandRoomId,
    IdemandRoomType,
    IdemandRoomUpdatedAt,
} from '@app/idemand/room/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class IdemandRoomMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param room
     */
    mapModelToAggregate(room: LiteralObject, cQMetadata?: CQMetadata): IdemandRoom
    {
        if (!room) return;

        return this.makeAggregate(room, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param rooms
     */
    mapModelsToAggregates(rooms: LiteralObject[], cQMetadata?: CQMetadata): IdemandRoom[]
    {
        if (!Array.isArray(rooms)) return;

        return rooms.map(room => this.makeAggregate(room, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param room
     */
    mapAggregateToResponse(room: IdemandRoom): IdemandRoomResponse
    {
        return this.makeResponse(room);
    }

    /**
     * Map array of aggregates to array responses
     * @param rooms
     */
    mapAggregatesToResponses(rooms: IdemandRoom[]): IdemandRoomResponse[]
    {
        if (!Array.isArray(rooms)) return;

        return rooms.map(room => this.makeResponse(room));
    }

    private makeAggregate(room: LiteralObject, cQMetadata?: CQMetadata): IdemandRoom
    {
        return IdemandRoom.register(
            new IdemandRoomId(room.id, { undefinable: true }),
            new IdemandRoomType(room.type, { undefinable: true }),
            new IdemandRoomCreatedAt(room.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new IdemandRoomUpdatedAt(room.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new IdemandRoomDeletedAt(room.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(room: IdemandRoom): IdemandRoomResponse
    {
        if (!room) return;

        return new IdemandRoomResponse(
            room.id.value,
            room.type.value,
            room.createdAt.value,
            room.updatedAt.value,
            room.deletedAt.value,
        );
    }
}
