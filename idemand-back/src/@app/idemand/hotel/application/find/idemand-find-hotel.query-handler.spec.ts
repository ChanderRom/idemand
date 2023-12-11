import { IdemandFindHotelQuery, IdemandHotelMapper, IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandFindHotelQueryHandler } from '@app/idemand/hotel/application/find/idemand-find-hotel.query-handler';
import { IdemandFindHotelService } from '@app/idemand/hotel/application/find/idemand-find-hotel.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelQueryHandler', () =>
{
    let queryHandler: IdemandFindHotelQueryHandler;
    let service: IdemandFindHotelService;
    let repository: IdemandMockHotelRepository;
    let mapper: IdemandHotelMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandFindHotelQueryHandler,
                {
                    provide : IdemandIHotelRepository,
                    useClass: IdemandMockHotelRepository,
                },
                {
                    provide : IdemandFindHotelService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandFindHotelQueryHandler>(IdemandFindHotelQueryHandler);
        service = module.get<IdemandFindHotelService>(IdemandFindHotelService);
        repository = <IdemandMockHotelRepository>module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
        mapper = new IdemandHotelMapper();
    });

    describe('main', () =>
    {
        test('IdemandFindHotelQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an hotel founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new IdemandFindHotelQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
