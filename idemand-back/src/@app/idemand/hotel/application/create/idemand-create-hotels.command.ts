import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandCreateHotelsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            totalRooms: number;
            bookedRooms: number;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
