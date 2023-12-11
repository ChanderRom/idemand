/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository } from '@app/idemand/room';
import { IdemandUpsertRoomService } from '@app/idemand/room/application/upsert/idemand-upsert-room.service';
import {
    IdemandRoomDate,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertRoomService', () =>

{
    let service: IdemandUpsertRoomService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandUpsertRoomService,
                IdemandMockRoomRepository,
                {
                    provide : IdemandIRoomRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandUpsertRoomService);
    });

    describe('main', () =>
    {
        test('IdemandUpsertRoomService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a room and emit event', async () =>
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
