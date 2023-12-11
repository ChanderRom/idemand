/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandUpdateHotelByIdInput } from '@api/graphql';
import { IdemandUpdateHotelByIdHandler, IdemandUpdateHotelByIdResolver } from '@api/idemand/hotel';
import { idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelByIdResolver', () =>
{
    let resolver: IdemandUpdateHotelByIdResolver;
    let handler: IdemandUpdateHotelByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                IdemandUpdateHotelByIdResolver,
                {
                    provide : IdemandUpdateHotelByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<IdemandUpdateHotelByIdResolver>(IdemandUpdateHotelByIdResolver);
        handler = module.get<IdemandUpdateHotelByIdHandler>(IdemandUpdateHotelByIdHandler);
    });

    test('IdemandUpdateHotelByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a hotel by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockHotelData[0])));
            expect(await resolver.main(<IdemandUpdateHotelByIdInput>idemandMockHotelData[0])).toBe(idemandMockHotelData[0]);
        });
    });
});
