import { IdemandCreateHotelCommandHandler } from './idemand-create-hotel.command-handler';
import { IdemandCreateHotelService } from './idemand-create-hotel.service';
import { IdemandCreateHotelCommand, idemandMockHotelData } from '@app/idemand/hotel';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateHotelCommandHandler', () =>
{
    let commandHandler: IdemandCreateHotelCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateHotelCommandHandler,
                {
                    provide : IdemandCreateHotelService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandCreateHotelCommandHandler>(IdemandCreateHotelCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateHotelCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the IdemandCreateHotelService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandCreateHotelCommand(
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
