import { IdemandHotel, IdemandIHotelRepository } from '@app/idemand/hotel';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdemandRawSQLHotelsService
{
    constructor(
        private readonly repository: IdemandIHotelRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<IdemandHotel[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
