import { IdemandRoom } from '@api/graphql';
import { IdemandFindRoomByIdHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class IdemandFindRoomByIdResolver
{
    constructor(
        private readonly handler: IdemandFindRoomByIdHandler,
    ) {}

    @Query('idemandFindRoomById')
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
