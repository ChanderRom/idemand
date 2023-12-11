import { IdemandHotel } from '@api/graphql';
import { IdemandFindHotelByIdHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandFindHotelByIdResolver
{
    constructor(
        private readonly handler: IdemandFindHotelByIdHandler,
    ) {}

    @Query('idemandFindHotelById')
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
