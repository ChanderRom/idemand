import { IdemandIRoomRepository, IdemandRoom, IdemandRoomMapper, IdemandRoomModel } from '@app/idemand/room';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class IdemandSequelizeRoomRepository extends SequelizeRepository<IdemandRoom, IdemandRoomModel> implements IdemandIRoomRepository
{
    public readonly aggregateName: string = 'IdemandRoom';
    public readonly mapper: IdemandRoomMapper = new IdemandRoomMapper();

    constructor(
        @InjectModel(IdemandRoomModel)
        public readonly repository: typeof IdemandRoomModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
