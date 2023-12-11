import { IdemandCreateHotelController, IdemandCreateHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelController', () =>
{
    let controller: IdemandCreateHotelController;
    let handler: IdemandCreateHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandCreateHotelController,
            ],
            providers: [
                {
                    provide : IdemandCreateHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandCreateHotelController>(IdemandCreateHotelController);
        handler = module.get<IdemandCreateHotelHandler>(IdemandCreateHotelHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an hotel created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await controller.main(
                    idemandMockHotelData[0],
                ),
            )
                .toBe(idemandMockHotelData[0]);
        });
    });
});
