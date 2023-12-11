import { idemandMockHotelData, IdemandUpsertHotelCommand } from '@app/idemand/hotel';
import { IdemandUpsertHotelCommandHandler } from '@app/idemand/hotel/application/upsert/idemand-upsert-hotel.command-handler';
import { IdemandUpsertHotelService } from '@app/idemand/hotel/application/upsert/idemand-upsert-hotel.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertHotelCommandHandler', () =>
{
    let commandHandler: IdemandUpsertHotelCommandHandler;
    let service: IdemandUpsertHotelService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpsertHotelCommandHandler,
                {
                    provide : IdemandUpsertHotelService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpsertHotelCommandHandler>(IdemandUpsertHotelCommandHandler);
        service = module.get<IdemandUpsertHotelService>(IdemandUpsertHotelService);
    });

    describe('main', () =>
    {
        test('UpsertHotelCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the IdemandUpsertHotelService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpsertHotelCommand(
                    {
                        id: idemandMockHotelData[0].id,
                        name: idemandMockHotelData[0].name,
                        totalRooms: idemandMockHotelData[0].totalRooms,
                        bookedRooms: idemandMockHotelData[0].bookedRooms,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
