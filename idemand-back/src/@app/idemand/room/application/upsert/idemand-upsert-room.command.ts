import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandUpsertRoomCommand
{
    constructor(
        public readonly payload: {
            id: string;
            type?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
