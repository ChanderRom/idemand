/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandCreateHotelDto, IdemandCreateHotelHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotel/create')
export class IdemandCreateHotelController
{
    constructor(
        private readonly handler: IdemandCreateHotelHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create hotel' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: IdemandHotelDto })
    async main(
        @Body() payload: IdemandCreateHotelDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
