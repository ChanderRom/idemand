/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandGetHotelsHandler, IdemandGetHotelsResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetHotelsResolver', () =>
{
    let resolver: IdemandGetHotelsResolver;
    let handler: IdemandGetHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandGetHotelsResolver,
                {
                    provide : IdemandGetHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandGetHotelsResolver>(IdemandGetHotelsResolver);
        handler = module.get<IdemandGetHotelsHandler>(IdemandGetHotelsHandler);
    });

    test('IdemandGetHotelsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandGetHotelsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a idemandMockHotelData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData)));
            expect(await resolver.main()).toBe(idemandMockHotelData);
        });
    });
});
