import { IdemandRoom, IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandUpsertRoomHandler } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandUpsertRoomResolver
{
    constructor(
        private readonly handler: IdemandUpsertRoomHandler,
    ) {}

    @Mutation('idemandUpsertRoom')
    async main(
        @Args('payload') payload: IdemandUpdateRoomByIdInput,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
