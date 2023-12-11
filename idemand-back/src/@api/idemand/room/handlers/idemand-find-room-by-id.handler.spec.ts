/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomByIdHandler', () =>
{
    let handler: IdemandFindRoomByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindRoomByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandFindRoomByIdHandler>(IdemandFindRoomByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandFindRoomByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindRoomByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an room by id', async () =>
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
