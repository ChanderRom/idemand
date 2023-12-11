/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandHotelDto, IdemandUpdateHotelsDto, IdemandUpdateHotelsHandler } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotels/update')
export class IdemandUpdateHotelsController
{
    constructor(
        private readonly handler: IdemandUpdateHotelsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update hotels' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: IdemandHotelDto })
    async main(
        @Body() payload: IdemandUpdateHotelsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
