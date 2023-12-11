/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandPaginateRoomsHandler, IdemandPaginateRoomsResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateRoomsResolver', () =>
{
    let resolver: IdemandPaginateRoomsResolver;
    let handler: IdemandPaginateRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandPaginateRoomsResolver,
                {
                    provide : IdemandPaginateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandPaginateRoomsResolver>(IdemandPaginateRoomsResolver);
        handler = module.get<IdemandPaginateRoomsHandler>(IdemandPaginateRoomsHandler);
    });

    test('IdemandPaginateRoomsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandPaginateRoomsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a idemandMockRoomData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : idemandMockRoomData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : idemandMockRoomData,
            });
        });
    });
});
