/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateRoomsInput } from '@api/graphql';
import { IdemandUpdateRoomsHandler, IdemandUpdateRoomsResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomsResolver', () =>
{
    let resolver: IdemandUpdateRoomsResolver;
    let handler: IdemandUpdateRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateRoomsResolver,
                {
                    provide : IdemandUpdateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpdateRoomsResolver>(IdemandUpdateRoomsResolver);
        handler = module.get<IdemandUpdateRoomsHandler>(IdemandUpdateRoomsHandler);
    });

    test('IdemandUpdateRoomsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a rooms updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(<IdemandUpdateRoomsInput>idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
