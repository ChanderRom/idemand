import { IdemandDeleteHotelsCommand } from '@app/idemand/hotel';
import { IdemandDeleteHotelsCommandHandler } from '@app/idemand/hotel/application/delete/idemand-delete-hotels.command-handler';
import { IdemandDeleteHotelsService } from '@app/idemand/hotel/application/delete/idemand-delete-hotels.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelsCommandHandler', () =>
{
    let commandHandler: IdemandDeleteHotelsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandDeleteHotelsCommandHandler,
                {
                    provide : IdemandDeleteHotelsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandDeleteHotelsCommandHandler>(IdemandDeleteHotelsCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandDeleteHotelsCommand(),
            )).toBe(undefined);
        });
    });
});
