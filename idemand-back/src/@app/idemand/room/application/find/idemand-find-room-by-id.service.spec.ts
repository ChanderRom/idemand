import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandFindRoomByIdService } from '@app/idemand/room/application/find/idemand-find-room-by-id.service';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomByIdService', () =>
{
    let service: IdemandFindRoomByIdService;
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
                IdemandFindRoomByIdService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandFindRoomByIdService);
        repository = module.get(IdemandIRoomRepository);
        mockRepository = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('FindRoomByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find room by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new IdemandRoomId(idemandMockRoomData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
