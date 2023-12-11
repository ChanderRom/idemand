import { IdemandCreateRoomInput, IdemandRoom } from '@api/graphql';
import { IdemandCreateRoomDto, IdemandRoomDto } from '@api/idemand/room';
import { IdemandCreateRoomCommand, IdemandFindRoomByIdQuery } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandCreateRoomHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandCreateRoomInput | IdemandCreateRoomDto,
        timezone?: string,
    ): Promise<IdemandRoom | IdemandRoomDto>
    {
        await this.commandBus.dispatch(new IdemandCreateRoomCommand(
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
