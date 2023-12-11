/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandGetRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetRoomsHandler', () =>
{
    let handler: IdemandGetRoomsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandGetRoomsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandGetRoomsHandler>(IdemandGetRoomsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandGetRoomsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandGetRoomsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a idemandMockRoomData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockRoomData);
        });
    });
});
