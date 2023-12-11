/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandDeleteRoomsHandler, IdemandRoomDto } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/rooms/delete')
export class IdemandDeleteRoomsController
{
    constructor(
        private readonly handler: IdemandDeleteRoomsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete rooms in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [IdemandRoomDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
