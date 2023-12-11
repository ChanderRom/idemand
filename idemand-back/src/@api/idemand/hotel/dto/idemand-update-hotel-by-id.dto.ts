/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class IdemandUpdateHotelByIdDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name?: string;

    @ApiProperty({
        type       : Number,
        description: 'totalRooms [input here api field description]',
    })
    totalRooms?: number;

    @ApiProperty({
        type       : Number,
        description: 'bookedRooms [input here api field description]',
    })
    bookedRooms?: number;

}
