import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class IdemandUpdateHotelsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            name?: string;
            totalRooms?: number;
            bookedRooms?: number;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
