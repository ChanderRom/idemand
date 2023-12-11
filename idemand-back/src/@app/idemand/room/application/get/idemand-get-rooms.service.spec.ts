import { IdemandIRoomRepository, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandGetRoomsService } from '@app/idemand/room/application/get/idemand-get-rooms.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandGetRoomsService', () =>
{
    let service: IdemandGetRoomsService;
    let repository: IdemandIRoomRepository;
    let mockRepository: IdemandMockRoomRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandGetRoomsService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandGetRoomsService);
        repository = module.get(IdemandIRoomRepository);
        mockRepository = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('GetRoomsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get rooms', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
