/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandCreateRoomDto, IdemandCreateRoomsHandler, IdemandRoomDto } from '@api/idemand/room';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/rooms/create')
export class IdemandCreateRoomsController
{
    constructor(
        private readonly handler: IdemandCreateRoomsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create rooms in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [IdemandRoomDto]})
    @ApiBody({ type: [IdemandCreateRoomDto]})
    async main(
        @Body() payload: IdemandCreateRoomDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
