/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomByIdController', () =>
{
    let handler: IdemandDeleteRoomByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteRoomByIdHandler,
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

        handler = module.get<IdemandDeleteRoomByIdHandler>(IdemandDeleteRoomByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an room deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await handler.main(
                    idemandMockRoomData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(idemandMockRoomData[0]);
        });
    });
});
