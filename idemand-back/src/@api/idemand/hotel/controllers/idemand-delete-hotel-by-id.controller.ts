/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandDeleteHotelByIdHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotel/delete')
export class IdemandDeleteHotelByIdController
{
    constructor(
        private readonly handler: IdemandDeleteHotelByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete hotel by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: IdemandHotelDto })
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
