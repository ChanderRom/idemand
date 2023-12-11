/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandUpsertHotelHandler, IdemandUpsertHotelResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertHotelResolver', () =>
{
    let resolver: IdemandUpsertHotelResolver;
    let handler: IdemandUpsertHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpsertHotelResolver,
                {
                    provide : IdemandUpsertHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpsertHotelResolver>(IdemandUpsertHotelResolver);
        handler = module.get<IdemandUpsertHotelHandler>(IdemandUpsertHotelHandler);
    });

    test('IdemandUpsertHotelResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpsertHotelResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an hotel upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(<IdemandUpdateHotelByIdInput>idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
