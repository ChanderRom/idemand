/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandCreateHotelInput } from '@api/graphql';
import { IdemandCreateHotelHandler, IdemandCreateHotelResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelResolver', () =>
{
    let resolver: IdemandCreateHotelResolver;
    let handler: IdemandCreateHotelHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandCreateHotelResolver,
                {
                    provide : IdemandCreateHotelHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandCreateHotelResolver>(IdemandCreateHotelResolver);
        handler = module.get<IdemandCreateHotelHandler>(IdemandCreateHotelHandler);
    });

    test('IdemandCreateHotelResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an hotel created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(<IdemandCreateHotelInput>idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
