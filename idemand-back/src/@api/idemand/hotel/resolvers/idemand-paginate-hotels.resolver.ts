import { Pagination } from '@api/graphql';
import { IdemandPaginateHotelsHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandPaginateHotelsResolver
{
    constructor(
        private readonly handler: IdemandPaginateHotelsHandler,
    ) {}

    @Query('idemandPaginateHotels')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
