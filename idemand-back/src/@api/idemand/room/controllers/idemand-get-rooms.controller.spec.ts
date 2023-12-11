import { IdemandGetRoomsController, IdemandGetRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetRoomsController', () =>
{
    let controller: IdemandGetRoomsController;
    let handler: IdemandGetRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandGetRoomsController,
            ],
            providers: [
                {
                    provide : IdemandGetRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandGetRoomsController>(IdemandGetRoomsController);
        handler = module.get<IdemandGetRoomsHandler>(IdemandGetRoomsHandler);
    });

    describe('main', () =>
    {
        test('IdemandGetRoomsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a idemandMockRoomData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData)));
            expect(await controller.main()).toBe(idemandMockRoomData);
        });
    });
});
