import { IdemandHotel } from '@api/graphql';
import { IdemandHotelDto } from '@api/idemand/hotel';
import { IdemandDeleteHotelByIdCommand, IdemandFindHotelByIdQuery } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandDeleteHotelByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        const hotel = await this.queryBus.ask(new IdemandFindHotelByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new IdemandDeleteHotelByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return hotel;
    }
}
