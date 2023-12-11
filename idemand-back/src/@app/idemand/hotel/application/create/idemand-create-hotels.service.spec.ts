/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandCreateHotelsService } from '@app/idemand/hotel/application/create/idemand-create-hotels.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelsService', () =>
{
    let service: IdemandCreateHotelsService;
    let mockRepository: IdemandMockHotelRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandCreateHotelsService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandCreateHotelsService);
        mockRepository = module.get(IdemandMockHotelRepository);
    });

    describe('main', () =>
    {
        test('CreateHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create hotels and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
