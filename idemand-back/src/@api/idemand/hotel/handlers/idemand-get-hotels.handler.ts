import { IdemandHotel } from '@api/graphql';
import { IdemandHotelDto } from '@api/idemand/hotel';
import { IdemandGetHotelsQuery } from '@app/idemand/hotel';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandGetHotelsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel[] | IdemandHotelDto[]>
    {
        return await this.queryBus.ask(new IdemandGetHotelsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
