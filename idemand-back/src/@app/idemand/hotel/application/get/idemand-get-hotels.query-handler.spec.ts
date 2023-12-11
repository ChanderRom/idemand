import { IdemandGetHotelsQuery, IdemandHotelMapper, IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandGetHotelsQueryHandler } from '@app/idemand/hotel/application/get/idemand-get-hotels.query-handler';
import { IdemandGetHotelsService } from '@app/idemand/hotel/application/get/idemand-get-hotels.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetHotelsQueryHandler', () =>
{
    let queryHandler: IdemandGetHotelsQueryHandler;
    let service: IdemandGetHotelsService;
    let repository: IdemandMockHotelRepository;
    let mapper: IdemandHotelMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandGetHotelsQueryHandler,
                {
                    provide : IdemandIHotelRepository,
                    useClass: IdemandMockHotelRepository,
                },
                {
                    provide : IdemandGetHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandGetHotelsQueryHandler>(IdemandGetHotelsQueryHandler);
        service = module.get<IdemandGetHotelsService>(IdemandGetHotelsService);
        repository = <IdemandMockHotelRepository>module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
        mapper = new IdemandHotelMapper();
    });

    describe('main', () =>
    {
        test('IdemandGetHotelsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an hotels founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new IdemandGetHotelsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
