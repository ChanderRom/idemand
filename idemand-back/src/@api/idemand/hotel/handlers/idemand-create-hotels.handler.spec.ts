import { IdemandCreateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelsHandler', () =>
{
    let handler: IdemandCreateHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateHotelsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandCreateHotelsHandler>(IdemandCreateHotelsHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an idemandMockHotelData created', async () =>
        {
            expect(await handler.main(idemandMockHotelData)).toBe(true);
        });
    });
});
