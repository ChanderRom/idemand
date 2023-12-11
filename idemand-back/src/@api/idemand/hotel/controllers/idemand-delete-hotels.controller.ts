/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandDeleteHotelsHandler, IdemandHotelDto } from '@api/idemand/hotel';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] hotel')
@Controller('idemand/hotels/delete')
export class IdemandDeleteHotelsController
{
    constructor(
        private readonly handler: IdemandDeleteHotelsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete hotels in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [IdemandHotelDto]})
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
