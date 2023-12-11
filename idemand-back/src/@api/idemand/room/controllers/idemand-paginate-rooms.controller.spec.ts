import { IdemandPaginateRoomsController, IdemandPaginateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateRoomsController', () =>
{
    let controller: IdemandPaginateRoomsController;
    let handler: IdemandPaginateRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandPaginateRoomsController,
            ],
            providers: [
                {
                    provide : IdemandPaginateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandPaginateRoomsController>(IdemandPaginateRoomsController);
        handler = module.get<IdemandPaginateRoomsHandler>(IdemandPaginateRoomsHandler);
    });

    describe('main', () =>
    {
        test('IdemandPaginateRoomsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a idemandMockRoomData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : idemandMockRoomData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : idemandMockRoomData,
            });
        });
    });
});
