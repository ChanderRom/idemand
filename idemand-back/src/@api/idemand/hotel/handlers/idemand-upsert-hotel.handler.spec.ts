/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpsertHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertHotelHandler', () =>
{
    let handler: IdemandUpsertHotelHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpsertHotelHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandUpsertHotelHandler>(IdemandUpsertHotelHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandUpsertHotelHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an hotel upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    idemandMockHotelData[0],
                    'Europe/Madrid',
                ))
                .toBe(idemandMockHotelData[0]);
        });
    });
});
