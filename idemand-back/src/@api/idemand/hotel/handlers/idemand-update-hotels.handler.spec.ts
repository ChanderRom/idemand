/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateHotelsInput } from '@api/graphql';
import { IdemandUpdateHotelsHandler } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelsHandler', () =>
{
    let handler: IdemandUpdateHotelsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateHotelsHandler,
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

        handler = module.get<IdemandUpdateHotelsHandler>(IdemandUpdateHotelsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandUpdateHotelsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a hotels updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(
                await handler.main(
                    <IdemandUpdateHotelsInput>idemandMockHotelData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockHotelData[0]);
        });
    });
});
