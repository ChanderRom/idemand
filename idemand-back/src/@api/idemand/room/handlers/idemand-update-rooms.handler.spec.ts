/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateRoomsInput } from '@api/graphql';
import { IdemandUpdateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomsHandler', () =>
{
    let handler: IdemandUpdateRoomsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateRoomsHandler,
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

        handler = module.get<IdemandUpdateRoomsHandler>(IdemandUpdateRoomsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandUpdateRoomsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a rooms updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    <IdemandUpdateRoomsInput>idemandMockRoomData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockRoomData[0]);
        });
    });
});
