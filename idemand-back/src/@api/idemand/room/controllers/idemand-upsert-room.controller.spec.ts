import { IdemandUpsertRoomController, IdemandUpsertRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertRoomController', () =>
{
    let controller: IdemandUpsertRoomController;
    let handler: IdemandUpsertRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpsertRoomController,
            ],
            providers: [
                {
                    provide : IdemandUpsertRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpsertRoomController>(IdemandUpsertRoomController);
        handler = module.get<IdemandUpsertRoomHandler>(IdemandUpsertRoomHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpsertRoomController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an room upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main(idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
