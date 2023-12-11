import { IdemandRoom } from '@api/graphql';
import { IdemandDeleteRoomsHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandDeleteRoomsResolver
{
    constructor(
        private readonly handler: IdemandDeleteRoomsHandler,
    ) {}

    @Mutation('idemandDeleteRooms')
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
