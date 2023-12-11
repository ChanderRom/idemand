/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateHotelsInput } from '@api/graphql';
import { IdemandUpdateHotelsHandler, IdemandUpdateHotelsResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelsResolver', () =>
{
    let resolver: IdemandUpdateHotelsResolver;
    let handler: IdemandUpdateHotelsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateHotelsResolver,
                {
                    provide : IdemandUpdateHotelsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpdateHotelsResolver>(IdemandUpdateHotelsResolver);
        handler = module.get<IdemandUpdateHotelsHandler>(IdemandUpdateHotelsHandler);
    });

    test('IdemandUpdateHotelsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a hotels updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(<IdemandUpdateHotelsInput>idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
