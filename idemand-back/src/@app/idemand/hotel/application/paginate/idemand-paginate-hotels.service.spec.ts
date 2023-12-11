import { IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandPaginateHotelsService } from '@app/idemand/hotel/application/paginate/idemand-paginate-hotels.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateHotelsService', () =>
{
    let service: IdemandPaginateHotelsService;
    let repository: IdemandIHotelRepository;
    let mockRepository: IdemandMockHotelRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandPaginateHotelsService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandPaginateHotelsService);
        repository = module.get(IdemandIHotelRepository);
        mockRepository = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('IdemandPaginateHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate hotels', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
