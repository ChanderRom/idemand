/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandUpdateHotelByIdHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelByIdHandler', () =>
{
    let handler: IdemandUpdateHotelByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateHotelByIdHandler,
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

        handler = module.get<IdemandUpdateHotelByIdHandler>(IdemandUpdateHotelByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandUpdateHotelByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a hotel updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    <IdemandUpdateHotelByIdInput>idemandMockHotelData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(idemandMockHotelData[0]);
        });
    });
});
