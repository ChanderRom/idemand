/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandCreateRoomsService } from '@app/idemand/room/application/create/idemand-create-rooms.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomsService', () =>
{
    let service: IdemandCreateRoomsService;
    let mockRepository: IdemandMockRoomRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandCreateRoomsService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandCreateRoomsService);
        mockRepository = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('CreateRoomsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create rooms and emit event', async () =>
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
