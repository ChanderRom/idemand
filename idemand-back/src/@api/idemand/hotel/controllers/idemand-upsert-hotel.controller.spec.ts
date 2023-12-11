import { IdemandUpsertHotelController, IdemandUpsertHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertHotelController', () =>
{
    let controller: IdemandUpsertHotelController;
    let handler: IdemandUpsertHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpsertHotelController,
            ],
            providers: [
                {
                    provide : IdemandUpsertHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpsertHotelController>(IdemandUpsertHotelController);
        handler = module.get<IdemandUpsertHotelHandler>(IdemandUpsertHotelHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpsertHotelController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an hotel upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main(idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
