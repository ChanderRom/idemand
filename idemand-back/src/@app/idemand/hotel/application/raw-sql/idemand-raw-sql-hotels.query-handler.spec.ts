import { IdemandHotelMapper, IdemandIHotelRepository, IdemandMockHotelRepository, IdemandRawSQLHotelsQuery } from '@app/idemand/hotel';
import { IdemandRawSQLHotelsQueryHandler } from '@app/idemand/hotel/application/raw-sql/idemand-raw-sql-hotels.query-handler';
import { IdemandRawSQLHotelsService } from '@app/idemand/hotel/application/raw-sql/idemand-raw-sql-hotels.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLHotelsQueryHandler', () =>
{
    let queryHandler: IdemandRawSQLHotelsQueryHandler;
    let service: IdemandRawSQLHotelsService;
    let repository: IdemandMockHotelRepository;
    let mapper: IdemandHotelMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandRawSQLHotelsQueryHandler,
                {
                    provide : IdemandIHotelRepository,
                    useClass: IdemandMockHotelRepository,
                },
                {
                    provide : IdemandRawSQLHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandRawSQLHotelsQueryHandler>(IdemandRawSQLHotelsQueryHandler);
        service = module.get<IdemandRawSQLHotelsService>(IdemandRawSQLHotelsService);
        repository = <IdemandMockHotelRepository>module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
        mapper = new IdemandHotelMapper();
    });

    describe('main', () =>
    {
        test('IdemandRawSQLHotelsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an hotels founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new IdemandRawSQLHotelsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
