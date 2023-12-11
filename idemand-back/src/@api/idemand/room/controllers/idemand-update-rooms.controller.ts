/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandRoomDto, IdemandUpdateRoomsDto, IdemandUpdateRoomsHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/rooms/update')
export class IdemandUpdateRoomsController
{
    constructor(
        private readonly handler: IdemandUpdateRoomsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update rooms' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: IdemandRoomDto })
    async main(
        @Body() payload: IdemandUpdateRoomsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
