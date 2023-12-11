import { IdemandCreateHotelInput } from '@api/graphql';
import { IdemandCreateHotelDto } from '@api/idemand/hotel';
import { IdemandCreateHotelsCommand } from '@app/idemand/hotel';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandCreateHotelsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: IdemandCreateHotelInput[] | IdemandCreateHotelDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new IdemandCreateHotelsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
