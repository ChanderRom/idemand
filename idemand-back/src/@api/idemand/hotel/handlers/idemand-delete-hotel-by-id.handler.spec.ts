/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelByIdController', () =>
{
    let handler: IdemandDeleteHotelByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteHotelByIdHandler,
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

        handler = module.get<IdemandDeleteHotelByIdHandler>(IdemandDeleteHotelByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an hotel deleted', async () =>
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
