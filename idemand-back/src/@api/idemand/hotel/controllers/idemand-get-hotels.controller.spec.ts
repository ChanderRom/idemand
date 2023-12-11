import { IdemandGetHotelsController, IdemandGetHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetHotelsController', () =>
{
    let controller: IdemandGetHotelsController;
    let handler: IdemandGetHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandGetHotelsController,
            ],
            providers: [
                {
                    provide : IdemandGetHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandGetHotelsController>(IdemandGetHotelsController);
        handler = module.get<IdemandGetHotelsHandler>(IdemandGetHotelsHandler);
    });

    describe('main', () =>
    {
        test('IdemandGetHotelsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a idemandMockHotelData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData)));
            expect(await controller.main()).toBe(idemandMockHotelData);
        });
    });
});
