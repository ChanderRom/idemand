import { IdemandHotel } from '@api/graphql';
import { IdemandDeleteHotelByIdHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandDeleteHotelByIdResolver
{
    constructor(
        private readonly handler: IdemandDeleteHotelByIdHandler,
    ) {}

    @Mutation('idemandDeleteHotelById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
