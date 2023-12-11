import { IdemandCreateRoomInput, IdemandRoom } from '@api/graphql';
import { IdemandCreateRoomHandler } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandCreateRoomResolver
{
    constructor(
        private readonly handler: IdemandCreateRoomHandler,
    ) {}

    @Mutation('idemandCreateRoom')
    async main(
        @Args('payload') payload: IdemandCreateRoomInput,
        @Timezone() timezone?: string,
    ): Promise<IdemandRoom>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
