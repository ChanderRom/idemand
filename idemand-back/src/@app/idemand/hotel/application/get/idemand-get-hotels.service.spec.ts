import { IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandGetHotelsService } from '@app/idemand/hotel/application/get/idemand-get-hotels.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetHotelsService', () =>
{
    let service: IdemandGetHotelsService;
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
                IdemandGetHotelsService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandGetHotelsService);
        repository = module.get(IdemandIHotelRepository);
        mockRepository = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('GetHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get hotels', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
