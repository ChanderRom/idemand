/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandCreateHotelDto, IdemandCreateHotelsHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotels/create')
export class IdemandCreateHotelsController
{
    constructor(
        private readonly handler: IdemandCreateHotelsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create hotels in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [IdemandHotelDto]})
    @ApiBody({ type: [IdemandCreateHotelDto]})
    async main(
        @Body() payload: IdemandCreateHotelDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
