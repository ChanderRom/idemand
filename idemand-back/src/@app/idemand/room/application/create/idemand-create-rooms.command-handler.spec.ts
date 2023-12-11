import { IdemandCreateRoomsCommand, idemandMockRoomData } from '@app/idemand/room';
import { IdemandCreateRoomsCommandHandler } from '@app/idemand/room/application/create/idemand-create-rooms.command-handler';
import { IdemandCreateRoomsService } from '@app/idemand/room/application/create/idemand-create-rooms.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('idemandCreateRoomsCommandHandler', () =>
{
    let commandHandler: IdemandCreateRoomsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateRoomsCommandHandler,
                {
                    provide : IdemandCreateRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandCreateRoomsCommandHandler>(IdemandCreateRoomsCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return IdemandMockRoomData created', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandCreateRoomsCommand(
                    idemandMockRoomData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
