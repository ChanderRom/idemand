import { IdemandCreateRoomInput } from '@api/graphql';
import { IdemandCreateRoomsHandler, IdemandCreateRoomsResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomsResolver', () =>
{
    let resolver: IdemandCreateRoomsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateRoomsResolver,
                {
                    provide : IdemandCreateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandCreateRoomsResolver>(IdemandCreateRoomsResolver);
    });

    test('IdemandCreateRoomsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an rooms created', async () =>
        {
            expect(await resolver.main(<IdemandCreateRoomInput[]>idemandMockRoomData)).toBe(undefined);
        });
    });
});
