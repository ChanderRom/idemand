/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandPaginateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateRoomsHandler', () =>
{
    let handler: IdemandPaginateRoomsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandPaginateRoomsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandPaginateRoomsHandler>(IdemandPaginateRoomsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('IdemandPaginateRoomsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandPaginateRoomsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a rooms', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: idemandMockRoomData.length,
                count: idemandMockRoomData.length,
                rows : idemandMockRoomData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: idemandMockRoomData.length,
                    count: idemandMockRoomData.length,
                    rows : idemandMockRoomData,
                });
        });
    });
});
