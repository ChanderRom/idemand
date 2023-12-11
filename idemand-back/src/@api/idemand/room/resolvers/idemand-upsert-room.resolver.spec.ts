/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandUpsertRoomHandler, IdemandUpsertRoomResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertRoomResolver', () =>
{
    let resolver: IdemandUpsertRoomResolver;
    let handler: IdemandUpsertRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpsertRoomResolver,
                {
                    provide : IdemandUpsertRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpsertRoomResolver>(IdemandUpsertRoomResolver);
        handler = module.get<IdemandUpsertRoomHandler>(IdemandUpsertRoomHandler);
    });

    test('IdemandUpsertRoomResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpsertRoomResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an room upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(<IdemandUpdateRoomByIdInput>idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
