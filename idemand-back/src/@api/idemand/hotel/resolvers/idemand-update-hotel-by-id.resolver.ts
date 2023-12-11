import { IdemandHotel, IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandUpdateHotelByIdHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpdateHotelByIdResolver
{
    constructor(
        private readonly handler: IdemandUpdateHotelByIdHandler,
    ) {}

    @Mutation('idemandUpdateHotelById')
    async main(
        @Args('payload') payload: IdemandUpdateHotelByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandHotel>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
