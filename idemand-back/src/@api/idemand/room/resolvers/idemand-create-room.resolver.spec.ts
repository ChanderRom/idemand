/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandCreateRoomInput } from '@api/graphql';
import { IdemandCreateRoomHandler, IdemandCreateRoomResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomResolver', () =>
{
    let resolver: IdemandCreateRoomResolver;
    let handler: IdemandCreateRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandCreateRoomResolver,
                {
                    provide : IdemandCreateRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandCreateRoomResolver>(IdemandCreateRoomResolver);
        handler = module.get<IdemandCreateRoomHandler>(IdemandCreateRoomHandler);
    });

    test('IdemandCreateRoomResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an room created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(<IdemandCreateRoomInput>idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
