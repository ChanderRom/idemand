/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandDeleteRoomsService } from '@app/idemand/room/application/delete/idemand-delete-rooms.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomsService', () =>
{
    let service: IdemandDeleteRoomsService;
    let repository: IdemandIRoomRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandDeleteRoomsService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandDeleteRoomsService);
        repository = module.get(IdemandIRoomRepository);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete room and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
