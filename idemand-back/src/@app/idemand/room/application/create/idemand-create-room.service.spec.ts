/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandCreateRoomService } from '@app/idemand/room/application/create/idemand-create-room.service';
import {
    IdemandRoomDate,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomService', () =>

{
    let service: IdemandCreateRoomService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandCreateRoomService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandCreateRoomService);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a room and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new IdemandRoomId(idemandMockRoomData[0].id),
                        type: new IdemandRoomType(idemandMockRoomData[0].type),
                        price: new IdemandRoomPrice(idemandMockRoomData[0].price),
                        date: new IdemandRoomDate(idemandMockRoomData[0].date),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
