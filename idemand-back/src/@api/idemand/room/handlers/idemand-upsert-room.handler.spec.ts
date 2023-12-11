/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpsertRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertRoomHandler', () =>
{
    let handler: IdemandUpsertRoomHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpsertRoomHandler,
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

        handler = module.get<IdemandUpsertRoomHandler>(IdemandUpsertRoomHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandUpsertRoomHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an room upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    idemandMockRoomData[0],
                    'Europe/Madrid',
                ))
                .toBe(idemandMockRoomData[0]);
        });
    });
});
