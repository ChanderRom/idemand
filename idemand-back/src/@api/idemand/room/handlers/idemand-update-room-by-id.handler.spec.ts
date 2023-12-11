/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandUpdateRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomByIdHandler', () =>
{
    let handler: IdemandUpdateRoomByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateRoomByIdHandler,
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

        handler = module.get<IdemandUpdateRoomByIdHandler>(IdemandUpdateRoomByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandUpdateRoomByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a room updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    <IdemandUpdateRoomByIdInput>idemandMockRoomData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(idemandMockRoomData[0]);
        });
    });
});
