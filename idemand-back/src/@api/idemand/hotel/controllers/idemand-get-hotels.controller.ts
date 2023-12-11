/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandGetHotelsHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotels/get')
export class IdemandGetHotelsController
{
    constructor(
        private readonly handler: IdemandGetHotelsHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get hotels according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [IdemandHotelDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
