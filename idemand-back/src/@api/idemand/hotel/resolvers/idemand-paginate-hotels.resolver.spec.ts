/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandPaginateHotelsHandler, IdemandPaginateHotelsResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateHotelsResolver', () =>
{
    let resolver: IdemandPaginateHotelsResolver;
    let handler: IdemandPaginateHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandPaginateHotelsResolver,
                {
                    provide : IdemandPaginateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandPaginateHotelsResolver>(IdemandPaginateHotelsResolver);
        handler = module.get<IdemandPaginateHotelsHandler>(IdemandPaginateHotelsHandler);
    });

    test('IdemandPaginateHotelsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandPaginateHotelsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a idemandMockHotelData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : idemandMockHotelData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : idemandMockHotelData,
            });
        });
    });
});
