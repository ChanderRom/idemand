import { IdemandRoom } from '@api/graphql';
import { IdemandGetRoomsHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandGetRoomsResolver
{
    constructor(
        private readonly handler: IdemandGetRoomsHandler,
    ) {}

    @Query('idemandGetRooms')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
