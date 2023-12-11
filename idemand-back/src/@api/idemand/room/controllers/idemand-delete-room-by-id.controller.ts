/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IdemandDeleteRoomByIdHandler, IdemandRoomDto } from '@api/idemand/room';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[idemand] room')
@Controller('idemand/room/delete')
export class IdemandDeleteRoomByIdController
{
    constructor(
        private readonly handler: IdemandDeleteRoomByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete room by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: IdemandRoomDto })
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
