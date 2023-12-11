/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindRoomHandler, IdemandFindRoomResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomResolver', () =>
{
    let resolver: IdemandFindRoomResolver;
    let handler: IdemandFindRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindRoomResolver,
                {
                    provide : IdemandFindRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandFindRoomResolver>(IdemandFindRoomResolver);
        handler = module.get<IdemandFindRoomHandler>(IdemandFindRoomHandler);
    });

    test('IdemandFindRoomResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindRoomResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a room', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main()).toBe(idemandMockRoomData[0]);
        });
    });
});
