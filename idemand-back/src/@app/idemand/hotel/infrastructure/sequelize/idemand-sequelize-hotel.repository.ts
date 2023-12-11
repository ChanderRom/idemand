import { IdemandHotel, IdemandHotelMapper, IdemandHotelModel, IdemandIHotelRepository } from '@app/idemand/hotel';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class IdemandSequelizeHotelRepository extends SequelizeRepository<IdemandHotel, IdemandHotelModel> implements IdemandIHotelRepository
{
    public readonly aggregateName: string = 'IdemandHotel';
    public readonly mapper: IdemandHotelMapper = new IdemandHotelMapper();

    constructor(
        @InjectModel(IdemandHotelModel)
        public readonly repository: typeof IdemandHotelModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
