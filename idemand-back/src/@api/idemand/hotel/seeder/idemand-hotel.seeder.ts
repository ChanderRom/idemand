import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { IdemandCreateHotelsCommand } from '@app/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';

@Injectable()
export class IdemandHotelSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new IdemandCreateHotelsCommand(
            idemandMockHotelData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
