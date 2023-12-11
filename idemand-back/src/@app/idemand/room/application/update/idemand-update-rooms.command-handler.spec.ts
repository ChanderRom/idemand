import { idemandMockRoomData, IdemandUpdateRoomsCommand } from '@app/idemand/room';
import { IdemandUpdateRoomsCommandHandler } from '@app/idemand/room/application/update/idemand-update-rooms.command-handler';
import { IdemandUpdateRoomsService } from '@app/idemand/room/application/update/idemand-update-rooms.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomsCommandHandler', () =>
{
    let commandHandler: IdemandUpdateRoomsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpdateRoomsCommandHandler,
                {
                    provide : IdemandUpdateRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpdateRoomsCommandHandler>(IdemandUpdateRoomsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateRoomsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an rooms updated', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpdateRoomsCommand(
                    {
                        id: idemandMockRoomData[0].id,
                        type: idemandMockRoomData[0].type,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
