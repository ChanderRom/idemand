/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteHotelByIdController, IdemandDeleteHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelByIdController', () =>
{
    let controller: IdemandDeleteHotelByIdController;
    let handler: IdemandDeleteHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandDeleteHotelByIdController,
            ],
            providers: [
                {
                    provide : IdemandDeleteHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandDeleteHotelByIdController>(IdemandDeleteHotelByIdController);
        handler = module.get<IdemandDeleteHotelByIdHandler>(IdemandDeleteHotelByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an hotel deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await controller.main(idemandMockHotelData[0].id)).toBe(idemandMockHotelData[0]);
        });
    });
});
