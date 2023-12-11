import { IdemandFindRoomController, IdemandFindRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomController', () =>
{
    let controller: IdemandFindRoomController;
    let handler: IdemandFindRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandFindRoomController,
            ],
            providers: [
                {
                    provide : IdemandFindRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandFindRoomController>(IdemandFindRoomController);
        handler = module.get<IdemandFindRoomHandler>(IdemandFindRoomHandler);
    });

    describe('main', () =>
    {
        test('IdemandFindRoomController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a room', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main()).toBe(idemandMockRoomData[0]);
        });
    });
});
