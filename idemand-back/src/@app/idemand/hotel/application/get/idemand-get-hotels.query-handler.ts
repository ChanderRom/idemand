import { IdemandGetHotelsQuery, IdemandHotelMapper, IdemandHotelResponse } from '@app/idemand/hotel';
import { IdemandGetHotelsService } from '@app/idemand/hotel/application/get/idemand-get-hotels.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandGetHotelsQuery)
export class IdemandGetHotelsQueryHandler implements IQueryHandler<IdemandGetHotelsQuery>
{
    private readonly mapper: IdemandHotelMapper = new IdemandHotelMapper();

    constructor(
        private readonly getHotelsService: IdemandGetHotelsService,
    ) {}

    async execute(query: IdemandGetHotelsQuery): Promise<IdemandHotelResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getHotelsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
