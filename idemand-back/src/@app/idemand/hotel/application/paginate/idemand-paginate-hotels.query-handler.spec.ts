import { IdemandIHotelRepository, IdemandMockHotelRepository, IdemandPaginateHotelsQuery } from '@app/idemand/hotel';
import { IdemandPaginateHotelsQueryHandler } from '@app/idemand/hotel/application/paginate/idemand-paginate-hotels.query-handler';
import { IdemandPaginateHotelsService } from '@app/idemand/hotel/application/paginate/idemand-paginate-hotels.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateHotelsQueryHandler', () =>
{
    let queryHandler: IdemandPaginateHotelsQueryHandler;
    let service: IdemandPaginateHotelsService;
    let repository: IdemandMockHotelRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandPaginateHotelsQueryHandler,
                {
                    provide : IdemandIHotelRepository,
                    useClass: IdemandMockHotelRepository,
                },
                {
                    provide : IdemandPaginateHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandPaginateHotelsQueryHandler>(IdemandPaginateHotelsQueryHandler);
        service = module.get<IdemandPaginateHotelsService>(IdemandPaginateHotelsService);
        repository = <IdemandMockHotelRepository>module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
    });

    describe('main', () =>
    {
        test('IdemandPaginateHotelsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an hotels paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new IdemandPaginateHotelsQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
