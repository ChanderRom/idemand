import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class IdemandUpdateHotelByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name?: string;
            totalRooms?: number;
            bookedRooms?: number;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
