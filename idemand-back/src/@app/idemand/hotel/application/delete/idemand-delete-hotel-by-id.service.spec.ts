/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandDeleteHotelByIdService } from '@app/idemand/hotel/application/delete/idemand-delete-hotel-by-id.service';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelByIdService', () =>
{
    let service: IdemandDeleteHotelByIdService;
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
                IdemandDeleteHotelByIdService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandDeleteHotelByIdService);
        repository = module.get(IdemandIHotelRepository);
        mockRepository = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete hotel and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new IdemandHotelId(idemandMockHotelData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
