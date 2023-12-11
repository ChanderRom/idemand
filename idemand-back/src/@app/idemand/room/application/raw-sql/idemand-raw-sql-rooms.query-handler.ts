import { IdemandRawSQLRoomsQuery, IdemandRoomMapper, IdemandRoomResponse } from '@app/idemand/room';
import { IdemandRawSQLRoomsService } from '@app/idemand/room/application/raw-sql/idemand-raw-sql-rooms.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandRawSQLRoomsQuery)
export class IdemandRawSQLRoomsQueryHandler implements IQueryHandler<IdemandRawSQLRoomsQuery>
{
    private readonly mapper: IdemandRoomMapper = new IdemandRoomMapper();

    constructor(
        private readonly rawSQLRoomsService: IdemandRawSQLRoomsService,
    ) {}

    async execute(query: IdemandRawSQLRoomsQuery): Promise<IdemandRoomResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLRoomsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
