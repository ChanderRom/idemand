/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandPaginateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateHotelsHandler', () =>
{
    let handler: IdemandPaginateHotelsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandPaginateHotelsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandPaginateHotelsHandler>(IdemandPaginateHotelsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandPaginateHotelsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandPaginateHotelsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a hotels', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: idemandMockHotelData.length,
                count: idemandMockHotelData.length,
                rows : idemandMockHotelData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: idemandMockHotelData.length,
                    count: idemandMockHotelData.length,
                    rows : idemandMockHotelData,
                });
        });
    });
});
