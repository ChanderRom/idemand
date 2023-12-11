/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteRoomByIdHandler, IdemandDeleteRoomByIdResolver } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomByIdResolver', () =>
{
    let resolver: IdemandDeleteRoomByIdResolver;
    let handler: IdemandDeleteRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteRoomByIdResolver,
                {
                    provide : IdemandDeleteRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandDeleteRoomByIdResolver>(IdemandDeleteRoomByIdResolver);
        handler = module.get<IdemandDeleteRoomByIdHandler>(IdemandDeleteRoomByIdHandler);
    });

    test('IdemandDeleteRoomByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an room deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await resolver.main(idemandMockRoomData[0].id)).toBe(idemandMockRoomData[0]);
        });
    });
});
