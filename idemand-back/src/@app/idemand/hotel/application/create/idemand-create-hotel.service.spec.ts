/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandCreateHotelService } from '@app/idemand/hotel/application/create/idemand-create-hotel.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelService', () =>

{
    let service: IdemandCreateHotelService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandCreateHotelService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandCreateHotelService);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a hotel and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new IdemandHotelId(idemandMockHotelData[0].id),
                        name: new IdemandHotelName(idemandMockHotelData[0].name),
                        totalRooms: new IdemandHotelTotalRooms(idemandMockHotelData[0].totalRooms),
                        bookedRooms: new IdemandHotelBookedRooms(idemandMockHotelData[0].bookedRooms),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
