import { IdemandCreateHotelsCommand, idemandMockHotelData } from '@app/idemand/hotel';
import { IdemandCreateHotelsCommandHandler } from '@app/idemand/hotel/application/create/idemand-create-hotels.command-handler';
import { IdemandCreateHotelsService } from '@app/idemand/hotel/application/create/idemand-create-hotels.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('idemandCreateHotelsCommandHandler', () =>
{
    let commandHandler: IdemandCreateHotelsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateHotelsCommandHandler,
                {
                    provide : IdemandCreateHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandCreateHotelsCommandHandler>(IdemandCreateHotelsCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateHotelsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return IdemandMockHotelData created', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandCreateHotelsCommand(
                    idemandMockHotelData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
