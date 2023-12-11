/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateRoomByIdInput } from '@api/graphql';
import { IdemandUpdateRoomByIdHandler, IdemandUpdateRoomByIdResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomByIdResolver', () =>
{
    let resolver: IdemandUpdateRoomByIdResolver;
    let handler: IdemandUpdateRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateRoomByIdResolver,
                {
                    provide : IdemandUpdateRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpdateRoomByIdResolver>(IdemandUpdateRoomByIdResolver);
        handler = module.get<IdemandUpdateRoomByIdHandler>(IdemandUpdateRoomByIdHandler);
    });

    test('IdemandUpdateRoomByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a room by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(<IdemandUpdateRoomByIdInput>idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
