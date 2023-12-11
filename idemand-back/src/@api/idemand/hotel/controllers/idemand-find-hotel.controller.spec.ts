import { IdemandFindHotelController, IdemandFindHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelController', () =>
{
    let controller: IdemandFindHotelController;
    let handler: IdemandFindHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandFindHotelController,
            ],
            providers: [
                {
                    provide : IdemandFindHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandFindHotelController>(IdemandFindHotelController);
        handler = module.get<IdemandFindHotelHandler>(IdemandFindHotelHandler);
    });

    describe('main', () =>
    {
        test('IdemandFindHotelController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a hotel', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main()).toBe(idemandMockHotelData[0]);
        });
    });
});
