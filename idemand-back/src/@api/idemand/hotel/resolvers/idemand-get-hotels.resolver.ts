import { IdemandHotel } from '@api/graphql';
import { IdemandGetHotelsHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandGetHotelsResolver
{
    constructor(
        private readonly handler: IdemandGetHotelsHandler,
    ) {}

    @Query('idemandGetHotels')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
