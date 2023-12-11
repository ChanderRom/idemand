import { IdemandDeleteHotelsController, IdemandDeleteHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelsController', () =>
{
    let controller: IdemandDeleteHotelsController;
    let handler: IdemandDeleteHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandDeleteHotelsController,
            ],
            providers: [
                {
                    provide : IdemandDeleteHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandDeleteHotelsController>(IdemandDeleteHotelsController);
        handler = module.get<IdemandDeleteHotelsHandler>(IdemandDeleteHotelsHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an idemandMockHotelData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData)));
            expect(await controller.main()).toBe(idemandMockHotelData);
        });
    });
});
