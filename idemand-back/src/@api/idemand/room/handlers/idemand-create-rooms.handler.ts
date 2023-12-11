import { IdemandCreateRoomInput } from '@api/graphql';
import { IdemandCreateRoomDto } from '@api/idemand/room';
import { IdemandCreateRoomsCommand } from '@app/idemand/room';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandCreateRoomsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: IdemandCreateRoomInput[] | IdemandCreateRoomDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new IdemandCreateRoomsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
