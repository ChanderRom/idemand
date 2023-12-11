import { IdemandPaginateHotelsController, IdemandPaginateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateHotelsController', () =>
{
    let controller: IdemandPaginateHotelsController;
    let handler: IdemandPaginateHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandPaginateHotelsController,
            ],
            providers: [
                {
                    provide : IdemandPaginateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandPaginateHotelsController>(IdemandPaginateHotelsController);
        handler = module.get<IdemandPaginateHotelsHandler>(IdemandPaginateHotelsHandler);
    });

    describe('main', () =>
    {
        test('IdemandPaginateHotelsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a idemandMockHotelData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : idemandMockHotelData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : idemandMockHotelData,
            });
        });
    });
});
