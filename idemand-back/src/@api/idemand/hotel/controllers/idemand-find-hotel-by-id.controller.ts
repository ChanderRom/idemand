/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandFindHotelByIdHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotel/find')
export class IdemandFindHotelByIdController
{
    constructor(
        private readonly handler: IdemandFindHotelByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find hotel by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: IdemandHotelDto })
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
