/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandCreateHotelHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelHandler', () =>
{
    let handler: IdemandCreateHotelHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandCreateHotelHandler,
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

        handler = module.get<IdemandCreateHotelHandler>(IdemandCreateHotelHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an hotel created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    idemandMockHotelData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockHotelData[0]);
        });
    });
});
