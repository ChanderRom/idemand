/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandUpdateRoomsService } from '@app/idemand/room/application/update/idemand-update-rooms.service';
import {
    IdemandRoomId,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomsService', () =>
{
    let service: IdemandUpdateRoomsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandUpdateRoomsService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandUpdateRoomsService);
    });

    describe('main', () =>
    {
        test('UpdateRoomsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a rooms and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new IdemandRoomId(idemandMockRoomData[0].id),
                        type: new IdemandRoomType(idemandMockRoomData[0].type),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
