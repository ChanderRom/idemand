import { IdemandRoom, IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandRoomDto, IdemandUpdateRoomByIdDto } from '@api/idemand/room';
import { IdemandFindRoomByIdQuery, IdemandUpsertRoomCommand } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpsertRoomHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateRoomByIdInput | IdemandUpdateRoomByIdDto,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        await this.commandBus.dispatch(new IdemandUpsertRoomCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandFindRoomByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
