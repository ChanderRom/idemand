/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteHotelByIdHandler, IdemandDeleteHotelByIdResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelByIdResolver', () =>
{
    let resolver: IdemandDeleteHotelByIdResolver;
    let handler: IdemandDeleteHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandDeleteHotelByIdResolver,
                {
                    provide : IdemandDeleteHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandDeleteHotelByIdResolver>(IdemandDeleteHotelByIdResolver);
        handler = module.get<IdemandDeleteHotelByIdHandler>(IdemandDeleteHotelByIdHandler);
    });

    test('IdemandDeleteHotelByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an hotel deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(idemandMockHotelData[0].id)).toBe(idemandMockHotelData[0]);
        });
    });
});
