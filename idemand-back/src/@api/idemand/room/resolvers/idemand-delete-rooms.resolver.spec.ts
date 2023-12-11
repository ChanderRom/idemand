/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteRoomsHandler, IdemandDeleteRoomsResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomsResolver', () =>
{
    let resolver: IdemandDeleteRoomsResolver;
    let handler: IdemandDeleteRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteRoomsResolver,
                {
                    provide : IdemandDeleteRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandDeleteRoomsResolver>(IdemandDeleteRoomsResolver);
        handler = module.get<IdemandDeleteRoomsHandler>(IdemandDeleteRoomsHandler);
    });

    test('IdemandDeleteRoomsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an idemandMockRoomData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData)));
            expect(await resolver.main()).toBe(idemandMockRoomData);
        });
    });
});
