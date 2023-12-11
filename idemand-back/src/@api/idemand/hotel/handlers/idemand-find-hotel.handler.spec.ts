/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelHandler', () =>
{
    let handler: IdemandFindHotelHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindHotelHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandFindHotelHandler>(IdemandFindHotelHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandFindHotelHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindHotelHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a hotel', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockHotelData[0]);
        });
    });
});
