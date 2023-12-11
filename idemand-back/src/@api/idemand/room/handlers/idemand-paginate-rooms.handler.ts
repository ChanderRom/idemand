import { Pagination } from '@api/graphql';
import { IdemandPaginateRoomsQuery } from '@app/idemand/room';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandPaginateRoomsHandler
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
        return await this.queryBus.ask(new IdemandPaginateRoomsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
