import { IdemandRoom } from '@api/graphql';
import { IdemandRoomDto } from '@api/idemand/room';
import { IdemandDeleteRoomsCommand, IdemandGetRoomsQuery } from '@app/idemand/room';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandDeleteRoomsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom[] | IdemandRoomDto[]>
    {
        const rooms = await this.queryBus.ask(new IdemandGetRoomsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new IdemandDeleteRoomsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return rooms;
    }
}
