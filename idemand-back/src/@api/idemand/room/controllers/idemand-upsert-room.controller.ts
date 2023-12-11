/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandRoomDto, IdemandUpdateRoomByIdDto, IdemandUpsertRoomHandler } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/room/upsert')
export class IdemandUpsertRoomController
{
    constructor(
        private readonly handler: IdemandUpsertRoomHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert room' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: IdemandRoomDto })
    async main(
        @Body() payload: IdemandUpdateRoomByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
