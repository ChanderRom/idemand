import { IdemandFindHotelByIdQuery, IdemandHotelMapper, IdemandHotelResponse } from '@app/idemand/hotel';
import { IdemandFindHotelByIdService } from '@app/idemand/hotel/application/find/idemand-find-hotel-by-id.service';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandFindHotelByIdQuery)
export class IdemandFindHotelByIdQueryHandler implements IQueryHandler<IdemandFindHotelByIdQuery>
{
    private readonly mapper: IdemandHotelMapper = new IdemandHotelMapper();

    constructor(
        private readonly findHotelByIdService: IdemandFindHotelByIdService,
    ) {}

    async execute(query: IdemandFindHotelByIdQuery): Promise<IdemandHotelResponse>
    {
        const hotel = await this.findHotelByIdService.main(
            new IdemandHotelId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(hotel);
    }
}
