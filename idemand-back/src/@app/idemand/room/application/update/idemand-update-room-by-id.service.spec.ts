/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandUpdateRoomByIdService } from '@app/idemand/room/application/update/idemand-update-room-by-id.service';
import {
    IdemandRoomId,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomByIdService', () =>
{
    let service: IdemandUpdateRoomByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandUpdateRoomByIdService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandUpdateRoomByIdService);
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a room and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new IdemandRoomId(idemandMockRoomData[0].id),
                        type: new IdemandRoomType(idemandMockRoomData[0].type),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
