import { IdemandUpdateRoomsHandler } from '@api/idemand/room';
import { IdemandRoom, IdemandUpdateRoomsInput } from '@app/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpdateRoomsResolver
{
    constructor(
        private readonly handler: IdemandUpdateRoomsHandler,
    ) {}

    @Mutation('idemandUpdateRooms')
    async main(
        @Args('payload') payload: IdemandUpdateRoomsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
