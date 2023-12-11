import { IdemandHotelMapper, IdemandHotelResponse, IdemandRawSQLHotelsQuery } from '@app/idemand/hotel';
import { IdemandRawSQLHotelsService } from '@app/idemand/hotel/application/raw-sql/idemand-raw-sql-hotels.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandRawSQLHotelsQuery)
export class IdemandRawSQLHotelsQueryHandler implements IQueryHandler<IdemandRawSQLHotelsQuery>
{
    private readonly mapper: IdemandHotelMapper = new IdemandHotelMapper();

    constructor(
        private readonly rawSQLHotelsService: IdemandRawSQLHotelsService,
    ) {}

    async execute(query: IdemandRawSQLHotelsQuery): Promise<IdemandHotelResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLHotelsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
