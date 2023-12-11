import { IdemandFindHotelQuery, IdemandHotelMapper, IdemandHotelResponse } from '@app/idemand/hotel';
import { IdemandFindHotelService } from '@app/idemand/hotel/application/find/idemand-find-hotel.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandFindHotelQuery)
export class IdemandFindHotelQueryHandler implements IQueryHandler<IdemandFindHotelQuery>
{
    private readonly mapper: IdemandHotelMapper = new IdemandHotelMapper();

    constructor(
        private readonly findHotelService: IdemandFindHotelService,
    ) {}

    async execute(query: IdemandFindHotelQuery): Promise<IdemandHotelResponse>
    {
        const hotel = await this.findHotelService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(hotel);
    }
}
