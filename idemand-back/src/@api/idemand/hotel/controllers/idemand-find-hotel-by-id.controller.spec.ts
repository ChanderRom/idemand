import { IdemandFindHotelByIdController, IdemandFindHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelByIdController', () =>
{
    let controller: IdemandFindHotelByIdController;
    let handler: IdemandFindHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandFindHotelByIdController,
            ],
            providers: [
                {
                    provide : IdemandFindHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandFindHotelByIdController>(IdemandFindHotelByIdController);
        handler = module.get<IdemandFindHotelByIdHandler>(IdemandFindHotelByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandFindHotelByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an hotel by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main(idemandMockHotelData[0].id)).toBe(idemandMockHotelData[0]);
        });
    });
});
