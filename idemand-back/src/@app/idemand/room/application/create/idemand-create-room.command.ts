import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandCreateRoomCommand
{
    constructor(
        public readonly payload: {
            id: string;
            type: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
