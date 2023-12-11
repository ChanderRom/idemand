import { IdemandDeleteRoomsCommand } from '@app/idemand/room';
import { IdemandDeleteRoomsCommandHandler } from '@app/idemand/room/application/delete/idemand-delete-rooms.command-handler';
import { IdemandDeleteRoomsService } from '@app/idemand/room/application/delete/idemand-delete-rooms.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomsCommandHandler', () =>
{
    let commandHandler: IdemandDeleteRoomsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandDeleteRoomsCommandHandler,
                {
                    provide : IdemandDeleteRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandDeleteRoomsCommandHandler>(IdemandDeleteRoomsCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandDeleteRoomsCommand(),
            )).toBe(undefined);
        });
    });
});
