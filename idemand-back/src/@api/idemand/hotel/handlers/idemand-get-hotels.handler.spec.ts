/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandGetHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetHotelsHandler', () =>
{
    let handler: IdemandGetHotelsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandGetHotelsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandGetHotelsHandler>(IdemandGetHotelsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandGetHotelsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandGetHotelsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a idemandMockHotelData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockHotelData);
        });
    });
});
