import { IdemandRoom, IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandUpdateRoomByIdHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpdateRoomByIdResolver
{
    constructor(
        private readonly handler: IdemandUpdateRoomByIdHandler,
    ) {}

    @Mutation('idemandUpdateRoomById')
    async main(
        @Args('payload') payload: IdemandUpdateRoomByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
