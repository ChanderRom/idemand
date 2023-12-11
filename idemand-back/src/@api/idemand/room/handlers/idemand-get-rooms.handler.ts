import { IdemandRoom } from '@api/graphql';
import { IdemandRoomDto } from '@api/idemand/room';
import { IdemandGetRoomsQuery } from '@app/idemand/room';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandGetRoomsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom[] | IdemandRoomDto[]>
    {
        return await this.queryBus.ask(new IdemandGetRoomsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
