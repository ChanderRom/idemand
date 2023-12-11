import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { IdemandCreateRoomsCommand } from '@app/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';

@Injectable()
export class IdemandRoomSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new IdemandCreateRoomsCommand(
            idemandMockRoomData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
