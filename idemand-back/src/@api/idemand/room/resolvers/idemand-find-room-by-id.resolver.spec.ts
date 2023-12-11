/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindRoomByIdHandler, IdemandFindRoomByIdResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomByIdResolver', () =>
{
    let resolver: IdemandFindRoomByIdResolver;
    let handler: IdemandFindRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindRoomByIdResolver,
                {
                    provide : IdemandFindRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandFindRoomByIdResolver>(IdemandFindRoomByIdResolver);
        handler = module.get<IdemandFindRoomByIdHandler>(IdemandFindRoomByIdHandler);
    });

    test('IdemandFindRoomByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindRoomByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an room by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(idemandMockRoomData[0].id)).toBe(idemandMockRoomData[0]);
        });
    });
});
