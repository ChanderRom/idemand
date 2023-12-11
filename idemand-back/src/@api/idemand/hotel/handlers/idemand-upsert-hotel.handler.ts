import { IdemandHotel, IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandHotelDto, IdemandUpdateHotelByIdDto } from '@api/idemand/hotel';
import { IdemandFindHotelByIdQuery, IdemandUpsertHotelCommand } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpsertHotelHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateHotelByIdInput | IdemandUpdateHotelByIdDto,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        await this.commandBus.dispatch(new IdemandUpsertHotelCommand(
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
