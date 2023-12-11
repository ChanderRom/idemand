import { IdemandCreateHotelsController, IdemandCreateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelsController', () =>
{
    let controller: IdemandCreateHotelsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                IdemandCreateHotelsController,
            ],
            providers: [
                {
                    provide : IdemandCreateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandCreateHotelsController>(IdemandCreateHotelsController);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an idemandMockHotelData created', async () =>
        {
            expect(
                await controller.main(
                    idemandMockHotelData,
                ),
            )
                .toBe(undefined);
        });
    });
});
