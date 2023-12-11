import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandFindHotelByIdService } from '@app/idemand/hotel/application/find/idemand-find-hotel-by-id.service';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindHotelByIdService', () =>
{
    let service: IdemandFindHotelByIdService;
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
                IdemandFindHotelByIdService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandFindHotelByIdService);
        repository = module.get(IdemandIHotelRepository);
        mockRepository = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('FindHotelByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find hotel by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new IdemandHotelId(idemandMockHotelData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
