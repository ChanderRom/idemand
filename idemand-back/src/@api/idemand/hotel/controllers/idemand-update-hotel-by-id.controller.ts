/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandHotelDto, IdemandUpdateHotelByIdDto, IdemandUpdateHotelByIdHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotel/update')
export class IdemandUpdateHotelByIdController
{
    constructor(
        private readonly handler: IdemandUpdateHotelByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update hotel by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: IdemandHotelDto })
    async main(
        @Body() payload: IdemandUpdateHotelByIdDto,
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
