import { IdemandFindRoomQuery, IdemandRoomMapper, IdemandRoomResponse } from '@app/idemand/room';
import { IdemandFindRoomService } from '@app/idemand/room/application/find/idemand-find-room.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandFindRoomQuery)
export class IdemandFindRoomQueryHandler implements IQueryHandler<IdemandFindRoomQuery>
{
    private readonly mapper: IdemandRoomMapper = new IdemandRoomMapper();

    constructor(
        private readonly findRoomService: IdemandFindRoomService,
    ) {}

    async execute(query: IdemandFindRoomQuery): Promise<IdemandRoomResponse>
    {
        const room = await this.findRoomService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(room);
    }
}
