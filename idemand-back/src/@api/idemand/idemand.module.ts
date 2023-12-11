import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { IdemandSeeder } from './idemand.seeder';
import { IdemandModels, IdemandHandlers, IdemandServices, IdemandRepositories, IdemandSagas } from '../../@app/idemand';
import { IdemandRoomApiControllers, IdemandRoomApiResolvers, IdemandRoomApiHandlers, IdemandRoomApiServices } from './room';
import { IdemandHotelApiControllers, IdemandHotelApiResolvers, IdemandHotelApiHandlers, IdemandHotelApiServices } from './hotel';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...IdemandModels
            ])
    ],
    controllers: [
        ...IdemandRoomApiControllers,
        ...IdemandHotelApiControllers
    ],
    providers: [
        IdemandSeeder,
        ...IdemandHandlers,
        ...IdemandServices,
        ...IdemandRepositories,
        ...IdemandSagas,
        ...IdemandRoomApiResolvers,
        ...IdemandRoomApiHandlers,
        ...IdemandRoomApiServices,
        ...IdemandHotelApiResolvers,
        ...IdemandHotelApiHandlers,
        ...IdemandHotelApiServices
    ],
})
export class IdemandModule {}
