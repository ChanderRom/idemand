import { IdemandCreateRoomInput } from '@api/graphql';
import { IdemandCreateRoomsHandler } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandCreateRoomsResolver
{
    constructor(
        private readonly handler: IdemandCreateRoomsHandler,
    ) {}

    @Mutation('idemandCreateRooms')
    async main(
        @Args('payload') payload: IdemandCreateRoomInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
