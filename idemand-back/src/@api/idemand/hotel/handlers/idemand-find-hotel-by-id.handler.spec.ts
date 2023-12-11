/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelByIdHandler', () =>
{
    let handler: IdemandFindHotelByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindHotelByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandFindHotelByIdHandler>(IdemandFindHotelByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandFindHotelByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindHotelByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an hotel by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    idemandMockHotelData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockHotelData[0]);
        });
    });
});
