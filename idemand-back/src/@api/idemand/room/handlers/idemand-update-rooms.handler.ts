import { IdemandRoom, IdemandUpdateRoomsInput } from '@api/graphql';
import { IdemandRoomDto, IdemandUpdateRoomsDto } from '@api/idemand/room';
import { IdemandGetRoomsQuery, IdemandUpdateRoomsCommand } from '@app/idemand/room';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpdateRoomsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateRoomsInput | IdemandUpdateRoomsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        await this.commandBus.dispatch(new IdemandUpdateRoomsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandGetRoomsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
