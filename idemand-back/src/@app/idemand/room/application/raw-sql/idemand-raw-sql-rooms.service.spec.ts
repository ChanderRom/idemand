import { IdemandIRoomRepository, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandRawSQLRoomsService } from '@app/idemand/room/application/raw-sql/idemand-raw-sql-rooms.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandRawSQLRoomsService ', () =>
{
    let service: IdemandRawSQLRoomsService ;
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
                IdemandRawSQLRoomsService ,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(IdemandRawSQLRoomsService );
        repository      = module.get(IdemandIRoomRepository);
        mockRepository  = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('RawSQLRoomsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get rooms', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
