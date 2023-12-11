import { idemandMockHotelData, IdemandUpdateHotelsCommand } from '@app/idemand/hotel';
import { IdemandUpdateHotelsCommandHandler } from '@app/idemand/hotel/application/update/idemand-update-hotels.command-handler';
import { IdemandUpdateHotelsService } from '@app/idemand/hotel/application/update/idemand-update-hotels.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateHotelsCommandHandler', () =>
{
    let commandHandler: IdemandUpdateHotelsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpdateHotelsCommandHandler,
                {
                    provide : IdemandUpdateHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpdateHotelsCommandHandler>(IdemandUpdateHotelsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateHotelsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an hotels updated', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpdateHotelsCommand(
                    {
                        id: idemandMockHotelData[0].id,
                        name: idemandMockHotelData[0].name,
                        totalRooms: idemandMockHotelData[0].totalRooms,
                        bookedRooms: idemandMockHotelData[0].bookedRooms,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
