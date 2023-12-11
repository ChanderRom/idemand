import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandCreateRoomsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            type: string;
            price: string;
            date: string;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
