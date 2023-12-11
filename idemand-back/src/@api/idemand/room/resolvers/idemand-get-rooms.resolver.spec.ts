/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandGetRoomsHandler, IdemandGetRoomsResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetRoomsResolver', () =>
{
    let resolver: IdemandGetRoomsResolver;
    let handler: IdemandGetRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandGetRoomsResolver,
                {
                    provide : IdemandGetRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandGetRoomsResolver>(IdemandGetRoomsResolver);
        handler = module.get<IdemandGetRoomsHandler>(IdemandGetRoomsHandler);
    });

    test('IdemandGetRoomsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandGetRoomsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a idemandMockRoomData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData)));
            expect(await resolver.main()).toBe(idemandMockRoomData);
        });
    });
});
