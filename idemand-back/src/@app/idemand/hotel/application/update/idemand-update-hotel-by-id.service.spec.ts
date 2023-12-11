/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandUpdateHotelByIdService } from '@app/idemand/hotel/application/update/idemand-update-hotel-by-id.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelByIdService', () =>
{
    let service: IdemandUpdateHotelByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandUpdateHotelByIdService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandUpdateHotelByIdService);
    });

    describe('main', () =>
    {
        test('IdemandUpdateHotelByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a hotel and emit event', async () =>
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
                ),
            ).toBe(undefined);
        });
    });
});
