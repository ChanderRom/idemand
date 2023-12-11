import { IdemandPaginateRoomsQuery } from '@app/idemand/room';
import { IdemandPaginateRoomsService } from '@app/idemand/room/application/paginate/idemand-paginate-rooms.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandPaginateRoomsQuery)
export class IdemandPaginateRoomsQueryHandler implements IQueryHandler<IdemandPaginateRoomsQuery>
{
    constructor(
        private readonly paginateRoomsService: IdemandPaginateRoomsService,
    ) {}

    async execute(query: IdemandPaginateRoomsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateRoomsService.main(
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
