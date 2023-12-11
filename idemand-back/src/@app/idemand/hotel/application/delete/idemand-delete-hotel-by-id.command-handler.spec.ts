import { IdemandDeleteHotelByIdCommand, idemandMockHotelData } from '@app/idemand/hotel';
import { IdemandDeleteHotelByIdCommandHandler } from '@app/idemand/hotel/application/delete/idemand-delete-hotel-by-id.command-handler';
import { IdemandDeleteHotelByIdService } from '@app/idemand/hotel/application/delete/idemand-delete-hotel-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelByIdCommandHandler', () =>
{
    let commandHandler: IdemandDeleteHotelByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandDeleteHotelByIdCommandHandler,
                {
                    provide : IdemandDeleteHotelByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandDeleteHotelByIdCommandHandler>(IdemandDeleteHotelByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the IdemandDeleteHotelByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandDeleteHotelByIdCommand(
                    idemandMockHotelData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
