import { IdemandHotel } from '@api/graphql';
import { IdemandHotelDto } from '@api/idemand/hotel';
import { IdemandFindHotelByIdQuery } from '@app/idemand/hotel';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandFindHotelByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        return await this.queryBus.ask(new IdemandFindHotelByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
