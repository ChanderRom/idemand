import { idemandMockHotelData, IdemandUpdateHotelByIdCommand } from '@app/idemand/hotel';
import { IdemandUpdateHotelByIdCommandHandler } from '@app/idemand/hotel/application/update/idemand-update-hotel-by-id.command-handler';
import { IdemandUpdateHotelByIdService } from '@app/idemand/hotel/application/update/idemand-update-hotel-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelByIdCommandHandler', () =>
{
    let commandHandler: IdemandUpdateHotelByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpdateHotelByIdCommandHandler,
                {
                    provide : IdemandUpdateHotelByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpdateHotelByIdCommandHandler>(IdemandUpdateHotelByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateHotelByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an hotel created', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpdateHotelByIdCommand(
                    {
                        id: idemandMockHotelData[0].id,
                        name: idemandMockHotelData[0].name,
                        totalRooms: idemandMockHotelData[0].totalRooms,
                        bookedRooms: idemandMockHotelData[0].bookedRooms,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
