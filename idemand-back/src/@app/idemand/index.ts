import { IdemandRoomHandlers, IdemandRoomServices, IdemandRoomModel, IdemandIRoomRepository, IdemandSequelizeRoomRepository, IdemandRoomSagas } from './room';

export const IdemandHandlers = [
    ...IdemandRoomHandlers
];
export const IdemandServices = [
    ...IdemandRoomServices
];
export const IdemandModels = [
    IdemandRoomModel
];
export const IdemandRepositories = [
    {
        provide : IdemandIRoomRepository,
        useClass: IdemandSequelizeRoomRepository
    }
];
export const IdemandSagas = [
    IdemandRoomSagas
];
