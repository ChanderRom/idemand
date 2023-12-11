import { IdemandHotel, IdemandIHotelRepository } from '@app/idemand/hotel';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandFindHotelByIdService
{
    constructor(
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        id: IdemandHotelId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<IdemandHotel>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
