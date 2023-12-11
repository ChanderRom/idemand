import { IdemandIRoomRepository, IdemandRoom } from '@app/idemand/room';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandFindRoomByIdService
{
    constructor(
        private readonly repository: IdemandIRoomRepository,
    ) {}

    async main(
        id: IdemandRoomId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<IdemandRoom>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
