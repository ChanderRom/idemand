import { IdemandCreateHotelInput } from '@api/graphql';
import { IdemandCreateHotelsHandler, IdemandCreateHotelsResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelsResolver', () =>
{
    let resolver: IdemandCreateHotelsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateHotelsResolver,
                {
                    provide : IdemandCreateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandCreateHotelsResolver>(IdemandCreateHotelsResolver);
    });

    test('IdemandCreateHotelsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an hotels created', async () =>
        {
            expect(await resolver.main(<IdemandCreateHotelInput[]>idemandMockHotelData)).toBe(undefined);
        });
    });
});
