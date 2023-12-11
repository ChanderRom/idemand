/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteHotelsHandler, IdemandDeleteHotelsResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelsResolver', () =>
{
    let resolver: IdemandDeleteHotelsResolver;
    let handler: IdemandDeleteHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteHotelsResolver,
                {
                    provide : IdemandDeleteHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandDeleteHotelsResolver>(IdemandDeleteHotelsResolver);
        handler = module.get<IdemandDeleteHotelsHandler>(IdemandDeleteHotelsHandler);
    });

    test('IdemandDeleteHotelsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an idemandMockHotelData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData)));
            expect(await resolver.main()).toBe(idemandMockHotelData);
        });
    });
});
