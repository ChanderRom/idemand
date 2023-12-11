import { IdemandGetRoomsQuery, IdemandRoomMapper, IdemandRoomResponse } from '@app/idemand/room';
import { IdemandGetRoomsService } from '@app/idemand/room/application/get/idemand-get-rooms.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandGetRoomsQuery)
export class IdemandGetRoomsQueryHandler implements IQueryHandler<IdemandGetRoomsQuery>
{
    private readonly mapper: IdemandRoomMapper = new IdemandRoomMapper();

    constructor(
        private readonly getRoomsService: IdemandGetRoomsService,
    ) {}

    async execute(query: IdemandGetRoomsQuery): Promise<IdemandRoomResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getRoomsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
