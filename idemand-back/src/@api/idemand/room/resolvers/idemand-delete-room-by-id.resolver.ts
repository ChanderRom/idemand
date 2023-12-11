import { IdemandRoom } from '@api/graphql';
import { IdemandDeleteRoomByIdHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandDeleteRoomByIdResolver
{
    constructor(
        private readonly handler: IdemandDeleteRoomByIdHandler,
    ) {}

    @Mutation('idemandDeleteRoomById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
