import { IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandRawSQLRoomsService
{
    constructor(
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<IdemandRoom[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
