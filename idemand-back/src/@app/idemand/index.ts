import { IdemandRoomHandlers, IdemandRoomServices, IdemandRoomModel, IdemandIRoomRepository, IdemandSequelizeRoomRepository, IdemandRoomSagas } from './room';
import { IdemandHotelHandlers, IdemandHotelServices, IdemandHotelModel, IdemandIHotelRepository, IdemandSequelizeHotelRepository, IdemandHotelSagas } from './hotel';

export const IdemandHandlers = [
    ...IdemandRoomHandlers,
    ...IdemandHotelHandlers
];
export const IdemandServices = [
    ...IdemandRoomServices,
    ...IdemandHotelServices
];
export const IdemandModels = [
    IdemandRoomModel,
    IdemandHotelModel
];
export const IdemandRepositories = [
    {
        provide : IdemandIRoomRepository,
        useClass: IdemandSequelizeRoomRepository
    },
    {
        provide : IdemandIHotelRepository,
        useClass: IdemandSequelizeHotelRepository
    }
];
export const IdemandSagas = [
    IdemandRoomSagas,
    IdemandHotelSagas
];
