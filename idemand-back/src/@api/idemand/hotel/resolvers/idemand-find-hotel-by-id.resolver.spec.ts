/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandFindHotelByIdHandler, IdemandFindHotelByIdResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelByIdResolver', () =>
{
    let resolver: IdemandFindHotelByIdResolver;
    let handler: IdemandFindHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandFindHotelByIdResolver,
                {
                    provide : IdemandFindHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandFindHotelByIdResolver>(IdemandFindHotelByIdResolver);
        handler = module.get<IdemandFindHotelByIdHandler>(IdemandFindHotelByIdHandler);
    });

    test('IdemandFindHotelByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandFindHotelByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an hotel by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(idemandMockHotelData[0].id)).toBe(idemandMockHotelData[0]);
        });
    });
});
