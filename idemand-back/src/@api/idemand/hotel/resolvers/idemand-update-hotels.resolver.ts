import { IdemandUpdateHotelsHandler } from '@api/idemand/hotel';
import { IdemandHotel, IdemandUpdateHotelsInput } from '@api/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpdateHotelsResolver
{
    constructor(
        private readonly handler: IdemandUpdateHotelsHandler,
    ) {}

    @Mutation('idemandUpdateHotels')
    async main(
        @Args('payload') payload: IdemandUpdateHotelsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
