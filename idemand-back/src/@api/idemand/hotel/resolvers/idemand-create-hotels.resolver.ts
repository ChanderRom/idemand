import { IdemandCreateHotelInput } from '@api/graphql';
import { IdemandCreateHotelsHandler } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandCreateHotelsResolver
{
    constructor(
        private readonly handler: IdemandCreateHotelsHandler,
    ) {}

    @Mutation('idemandCreateHotels')
    async main(
        @Args('payload') payload: IdemandCreateHotelInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
