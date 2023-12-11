/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindHotelHandler, IdemandFindHotelResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelResolver', () =>
{
    let resolver: IdemandFindHotelResolver;
    let handler: IdemandFindHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindHotelResolver,
                {
                    provide : IdemandFindHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandFindHotelResolver>(IdemandFindHotelResolver);
        handler = module.get<IdemandFindHotelHandler>(IdemandFindHotelHandler);
    });

    test('IdemandFindHotelResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindHotelResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a hotel', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main()).toBe(idemandMockHotelData[0]);
        });
    });
});
