/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelsHandler', () =>
{
    let handler: IdemandDeleteHotelsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteHotelsHandler,
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

        handler = module.get<IdemandDeleteHotelsHandler>(IdemandDeleteHotelsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandDeleteHotelsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an idemandMockHotelData deleted', async () =>
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
