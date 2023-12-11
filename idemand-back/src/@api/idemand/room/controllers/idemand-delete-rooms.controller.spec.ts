import { IdemandDeleteRoomsController, IdemandDeleteRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomsController', () =>
{
    let controller: IdemandDeleteRoomsController;
    let handler: IdemandDeleteRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandDeleteRoomsController,
            ],
            providers: [
                {
                    provide : IdemandDeleteRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandDeleteRoomsController>(IdemandDeleteRoomsController);
        handler = module.get<IdemandDeleteRoomsHandler>(IdemandDeleteRoomsHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an idemandMockRoomData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData)));
            expect(await controller.main()).toBe(idemandMockRoomData);
        });
    });
});
