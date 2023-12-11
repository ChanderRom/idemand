import { IdemandRoom } from '@api/graphql';
import { IdemandRoomDto } from '@api/idemand/room';
import { IdemandDeleteRoomByIdCommand, IdemandFindRoomByIdQuery } from '@app/idemand/room';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandDeleteRoomByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        const room = await this.queryBus.ask(new IdemandFindRoomByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new IdemandDeleteRoomByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return room;
    }
}
