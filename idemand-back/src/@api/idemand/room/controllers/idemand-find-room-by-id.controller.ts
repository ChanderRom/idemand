/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandFindRoomByIdHandler, IdemandRoomDto } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/room/find')
export class IdemandFindRoomByIdController
{
    constructor(
        private readonly handler: IdemandFindRoomByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find room by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: IdemandRoomDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
