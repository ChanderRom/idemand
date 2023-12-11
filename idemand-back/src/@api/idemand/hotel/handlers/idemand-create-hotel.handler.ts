import { IdemandCreateHotelInput, IdemandHotel } from '@api/graphql';
import { IdemandCreateHotelDto, IdemandHotelDto } from '@api/idemand/hotel';
import { IdemandCreateHotelCommand, IdemandFindHotelByIdQuery } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandCreateHotelHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandCreateHotelInput | IdemandCreateHotelDto,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        await this.commandBus.dispatch(new IdemandCreateHotelCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandFindHotelByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
