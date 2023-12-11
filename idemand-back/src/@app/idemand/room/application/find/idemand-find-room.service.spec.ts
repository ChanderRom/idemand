import { IdemandIRoomRepository, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandFindRoomService } from '@app/idemand/room/application/find/idemand-find-room.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomService', () =>
{
    let service: IdemandFindRoomService;
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
                IdemandFindRoomService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandFindRoomService);
        repository = module.get(IdemandIRoomRepository);
        mockRepository = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('IdemandFindRoomService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find room', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
