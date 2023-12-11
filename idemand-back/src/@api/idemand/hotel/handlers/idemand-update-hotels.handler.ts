import { IdemandHotel, IdemandUpdateHotelsInput } from '@api/graphql';
import { IdemandHotelDto, IdemandUpdateHotelsDto } from '@api/idemand/hotel';
import { IdemandGetHotelsQuery, IdemandUpdateHotelsCommand } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandUpdateHotelsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: IdemandUpdateHotelsInput | IdemandUpdateHotelsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<IdemandHotel | IdemandHotelDto>
    {
        await this.commandBus.dispatch(new IdemandUpdateHotelsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new IdemandGetHotelsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
