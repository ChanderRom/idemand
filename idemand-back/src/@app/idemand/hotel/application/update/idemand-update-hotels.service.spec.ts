/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandUpdateHotelsService } from '@app/idemand/hotel/application/update/idemand-update-hotels.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelsService', () =>
{
    let service: IdemandUpdateHotelsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandUpdateHotelsService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandUpdateHotelsService);
    });

    describe('main', () =>
    {
        test('UpdateHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a hotels and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new IdemandHotelId(idemandMockHotelData[0].id),
                        name: new IdemandHotelName(idemandMockHotelData[0].name),
                        totalRooms: new IdemandHotelTotalRooms(idemandMockHotelData[0].totalRooms),
                        bookedRooms: new IdemandHotelBookedRooms(idemandMockHotelData[0].bookedRooms),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
