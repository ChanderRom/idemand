import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { IdemandSeeder } from './idemand.seeder';
import { IdemandModels, IdemandHandlers, IdemandServices, IdemandRepositories, IdemandSagas } from '../../@app/idemand';
import { IdemandRoomApiControllers, IdemandRoomApiResolvers, IdemandRoomApiHandlers, IdemandRoomApiServices } from './room';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...IdemandModels
            ])
    ],
    controllers: [
        ...IdemandRoomApiControllers
    ],
    providers: [
        IdemandSeeder,
        ...IdemandHandlers,
        ...IdemandServices,
        ...IdemandRepositories,
        ...IdemandSagas,
        ...IdemandRoomApiResolvers,
        ...IdemandRoomApiHandlers,
        ...IdemandRoomApiServices
    ],
})
export class IdemandModule {}
