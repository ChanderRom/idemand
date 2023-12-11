/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class IdemandUpdateRoomByIdDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'type [input here api field description]',
    })
    type?: string;

    @ApiProperty({
        type       : String,
        description: 'price [input here api field description]',
    })
    price?: string;

    @ApiProperty({
        type       : String,
        description: 'date [input here api field description]',
    })
    date?: string;

}
