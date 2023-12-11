import { IdemandRoom, IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandRoomDto, IdemandUpdateRoomByIdDto } from '@api/idemand/room';
import { IdemandFindRoomByIdQuery, IdemandUpdateRoomByIdCommand } from '@app/idemand/room';
import { ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpdateRoomByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateRoomByIdInput | IdemandUpdateRoomByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        const room = await this.queryBus.ask(new IdemandFindRoomByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, room);

        await this.commandBus.dispatch(new IdemandUpdateRoomByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandFindRoomByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
