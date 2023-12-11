/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandRoomDto, IdemandUpdateRoomByIdDto, IdemandUpdateRoomByIdHandler } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/room/update')
export class IdemandUpdateRoomByIdController
{
    constructor(
        private readonly handler: IdemandUpdateRoomByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update room by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: IdemandRoomDto })
    async main(
        @Body() payload: IdemandUpdateRoomByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
