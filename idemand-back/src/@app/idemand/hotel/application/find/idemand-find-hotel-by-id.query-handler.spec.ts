import { IdemandFindHotelByIdQuery, IdemandHotelMapper, IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandFindHotelByIdQueryHandler } from '@app/idemand/hotel/application/find/idemand-find-hotel-by-id.query-handler';
import { IdemandFindHotelByIdService } from '@app/idemand/hotel/application/find/idemand-find-hotel-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelByIdQueryHandler', () =>
{
    let queryHandler: IdemandFindHotelByIdQueryHandler;
    let service: IdemandFindHotelByIdService;
    let repository: IdemandMockHotelRepository;
    let mapper: IdemandHotelMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandFindHotelByIdQueryHandler,
                {
                    provide : IdemandIHotelRepository,
                    useClass: IdemandMockHotelRepository,
                },
                {
                    provide : IdemandFindHotelByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandFindHotelByIdQueryHandler>(IdemandFindHotelByIdQueryHandler);
        service = module.get<IdemandFindHotelByIdService>(IdemandFindHotelByIdService);
        repository = <IdemandMockHotelRepository>module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
        mapper = new IdemandHotelMapper();
    });

    describe('main', () =>
    {
        test('FindHotelByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an hotel founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new IdemandFindHotelByIdQuery(
                    idemandMockHotelData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
