import { idemandMockRoomData, IdemandUpdateRoomByIdCommand } from '@app/idemand/room';
import { IdemandUpdateRoomByIdCommandHandler } from '@app/idemand/room/application/update/idemand-update-room-by-id.command-handler';
import { IdemandUpdateRoomByIdService } from '@app/idemand/room/application/update/idemand-update-room-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomByIdCommandHandler', () =>
{
    let commandHandler: IdemandUpdateRoomByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpdateRoomByIdCommandHandler,
                {
                    provide : IdemandUpdateRoomByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpdateRoomByIdCommandHandler>(IdemandUpdateRoomByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateRoomByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an room created', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpdateRoomByIdCommand(
                    {
                        id: idemandMockRoomData[0].id,
                        type: idemandMockRoomData[0].type,
                        price: idemandMockRoomData[0].price,
                        date: idemandMockRoomData[0].date,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
