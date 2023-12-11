import { Pagination } from '@api/graphql';
import { IdemandPaginateHotelsQuery } from '@app/idemand/hotel';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandPaginateHotelsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new IdemandPaginateHotelsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
