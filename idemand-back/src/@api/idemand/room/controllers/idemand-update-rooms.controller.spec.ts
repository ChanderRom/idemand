import { IdemandUpdateRoomsController, IdemandUpdateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomsController', () =>
{
    let controller: IdemandUpdateRoomsController;
    let handler: IdemandUpdateRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpdateRoomsController,
            ],
            providers: [
                {
                    provide : IdemandUpdateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpdateRoomsController>(IdemandUpdateRoomsController);
        handler = module.get<IdemandUpdateRoomsHandler>(IdemandUpdateRoomsHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a rooms updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main(idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
