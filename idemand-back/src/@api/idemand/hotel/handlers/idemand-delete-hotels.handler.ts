import { IdemandHotel } from '@api/graphql';
import { IdemandHotelDto } from '@api/idemand/hotel';
import { IdemandDeleteHotelsCommand, IdemandGetHotelsQuery } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandDeleteHotelsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel[] | IdemandHotelDto[]>
    {
        const hotels = await this.queryBus.ask(new IdemandGetHotelsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new IdemandDeleteHotelsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return hotels;
    }
}
