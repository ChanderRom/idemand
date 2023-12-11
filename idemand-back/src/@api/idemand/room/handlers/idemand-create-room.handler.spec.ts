/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandCreateRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomHandler', () =>
{
    let handler: IdemandCreateRoomHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandCreateRoomHandler,
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

        handler = module.get<IdemandCreateRoomHandler>(IdemandCreateRoomHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an room created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    idemandMockRoomData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockRoomData[0]);
        });
    });
});
