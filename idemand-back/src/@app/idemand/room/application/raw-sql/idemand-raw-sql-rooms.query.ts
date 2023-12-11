import { CQMetadata } from '@aurorajs.dev/core';

export class IdemandRawSQLRoomsQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
