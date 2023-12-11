import { IdemandUpdateHotelByIdController, IdemandUpdateHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelByIdController', () =>
{
    let controller: IdemandUpdateHotelByIdController;
    let handler: IdemandUpdateHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpdateHotelByIdController,
            ],
            providers: [
                {
                    provide : IdemandUpdateHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpdateHotelByIdController>(IdemandUpdateHotelByIdController);
        handler = module.get<IdemandUpdateHotelByIdHandler>(IdemandUpdateHotelByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a hotel updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main(idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
