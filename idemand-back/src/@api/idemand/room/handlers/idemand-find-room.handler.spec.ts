/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomHandler', () =>
{
    let handler: IdemandFindRoomHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindRoomHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandFindRoomHandler>(IdemandFindRoomHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandFindRoomHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindRoomHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a room', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockRoomData[0]);
        });
    });
});
