import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class IdemandUpdateRoomsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            type?: string;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
