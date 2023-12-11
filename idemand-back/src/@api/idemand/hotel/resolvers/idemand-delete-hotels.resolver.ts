import { IdemandHotel } from '@api/graphql';
import { IdemandDeleteHotelsHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandDeleteHotelsResolver
{
    constructor(
        private readonly handler: IdemandDeleteHotelsHandler,
    ) {}

    @Mutation('idemandDeleteHotels')
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
