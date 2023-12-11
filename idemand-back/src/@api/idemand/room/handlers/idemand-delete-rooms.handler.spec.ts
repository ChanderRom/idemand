/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomsHandler', () =>
{
    let handler: IdemandDeleteRoomsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteRoomsHandler,
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

        handler = module.get<IdemandDeleteRoomsHandler>(IdemandDeleteRoomsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandDeleteRoomsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an idemandMockRoomData deleted', async () =>
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
