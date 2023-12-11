/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandCreateRoomDto, IdemandCreateRoomHandler, IdemandRoomDto } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/room/create')
export class IdemandCreateRoomController
{
    constructor(
        private readonly handler: IdemandCreateRoomHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create room' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: IdemandRoomDto })
    async main(
        @Body() payload: IdemandCreateRoomDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
