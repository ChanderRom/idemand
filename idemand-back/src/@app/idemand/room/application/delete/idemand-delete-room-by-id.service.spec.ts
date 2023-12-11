/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandDeleteRoomByIdService } from '@app/idemand/room/application/delete/idemand-delete-room-by-id.service';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomByIdService', () =>
{
    let service: IdemandDeleteRoomByIdService;
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
                IdemandDeleteRoomByIdService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandDeleteRoomByIdService);
        repository = module.get(IdemandIRoomRepository);
        mockRepository = module.get(IdemandMockRoomRepository);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete room and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new IdemandRoomId(idemandMockRoomData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
