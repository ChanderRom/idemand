import { IdemandHotel, IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandUpsertHotelHandler } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpsertHotelResolver
{
    constructor(
        private readonly handler: IdemandUpsertHotelHandler,
    ) {}

    @Mutation('idemandUpsertHotel')
    async main(
        @Args('payload') payload: IdemandUpdateHotelByIdInput,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
