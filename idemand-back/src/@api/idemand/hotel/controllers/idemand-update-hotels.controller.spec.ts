import { IdemandUpdateHotelsController, IdemandUpdateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelsController', () =>
{
    let controller: IdemandUpdateHotelsController;
    let handler: IdemandUpdateHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpdateHotelsController,
            ],
            providers: [
                {
                    provide : IdemandUpdateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpdateHotelsController>(IdemandUpdateHotelsController);
        handler = module.get<IdemandUpdateHotelsHandler>(IdemandUpdateHotelsHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a hotels updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main(idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
