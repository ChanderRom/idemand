import { IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandRawSQLHotelsService } from '@app/idemand/hotel/application/raw-sql/idemand-raw-sql-hotels.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandRawSQLHotelsService ', () =>
{
    let service: IdemandRawSQLHotelsService ;
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
                IdemandRawSQLHotelsService ,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(IdemandRawSQLHotelsService );
        repository      = module.get(IdemandIHotelRepository);
        mockRepository  = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('RawSQLHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get hotels', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
