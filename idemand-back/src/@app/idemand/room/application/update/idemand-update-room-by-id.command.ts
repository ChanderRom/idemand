import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class IdemandUpdateRoomByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            type?: string;
            price?: string;
            date?: string;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
