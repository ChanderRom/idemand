import { IdemandRoom } from '@api/graphql';
import { IdemandFindRoomHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandFindRoomResolver
{
    constructor(
        private readonly handler: IdemandFindRoomHandler,
    ) {}

    @Query('idemandFindRoom')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
