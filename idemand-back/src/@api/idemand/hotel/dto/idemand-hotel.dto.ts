/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';

export class IdemandHotelDto
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
    name: string;

    @ApiProperty({
        type       : Number,
        description: 'totalRooms [input here api field description]',
    })
    totalRooms: number;

    @ApiProperty({
        type       : Number,
        description: 'bookedRooms [input here api field description]',
    })
    bookedRooms: number;

    @ApiProperty({
        type       : String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type       : String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type       : String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;

}