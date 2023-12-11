/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandHotelDto, IdemandUpdateHotelByIdDto, IdemandUpsertHotelHandler } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotel/upsert')
export class IdemandUpsertHotelController
{
    constructor(
        private readonly handler: IdemandUpsertHotelHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert hotel' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: IdemandHotelDto })
    async main(
        @Body() payload: IdemandUpdateHotelByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
