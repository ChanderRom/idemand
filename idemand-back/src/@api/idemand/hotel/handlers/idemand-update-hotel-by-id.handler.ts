import { IdemandHotel, IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandHotelDto, IdemandUpdateHotelByIdDto } from '@api/idemand/hotel';
import { IdemandFindHotelByIdQuery, IdemandUpdateHotelByIdCommand } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpdateHotelByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateHotelByIdInput | IdemandUpdateHotelByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        const hotel = await this.queryBus.ask(new IdemandFindHotelByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, hotel);

        await this.commandBus.dispatch(new IdemandUpdateHotelByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandFindHotelByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
