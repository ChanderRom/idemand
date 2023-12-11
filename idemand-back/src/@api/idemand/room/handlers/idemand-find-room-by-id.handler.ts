import { IdemandRoom } from '@api/graphql';
import { IdemandRoomDto } from '@api/idemand/room';
import { IdemandFindRoomByIdQuery } from '@app/idemand/room';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandFindRoomByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        return await this.queryBus.ask(new IdemandFindRoomByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
