import { IdemandCreateHotelInput, IdemandHotel } from '@api/graphql';
import { IdemandCreateHotelHandler } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandCreateHotelResolver
{
    constructor(
        private readonly handler: IdemandCreateHotelHandler,
    ) {}

    @Mutation('idemandCreateHotel')
    async main(
        @Args('payload') payload: IdemandCreateHotelInput,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
