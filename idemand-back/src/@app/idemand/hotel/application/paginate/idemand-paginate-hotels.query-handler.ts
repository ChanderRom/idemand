import { IdemandPaginateHotelsQuery } from '@app/idemand/hotel';
import { IdemandPaginateHotelsService } from '@app/idemand/hotel/application/paginate/idemand-paginate-hotels.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandPaginateHotelsQuery)
export class IdemandPaginateHotelsQueryHandler implements IQueryHandler<IdemandPaginateHotelsQuery>
{
    constructor(
        private readonly paginateHotelsService: IdemandPaginateHotelsService,
    ) {}

    async execute(query: IdemandPaginateHotelsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateHotelsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
