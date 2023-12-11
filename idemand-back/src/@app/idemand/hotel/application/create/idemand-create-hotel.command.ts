import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandCreateHotelCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            totalRooms: number;
            bookedRooms: number;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
