import { IdemandCreateRoomCommandHandler } from './idemand-create-room.command-handler';
import { IdemandCreateRoomService } from './idemand-create-room.service';
import { IdemandCreateRoomCommand, idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomCommandHandler', () =>
{
    let commandHandler: IdemandCreateRoomCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateRoomCommandHandler,
                {
                    provide : IdemandCreateRoomService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandCreateRoomCommandHandler>(IdemandCreateRoomCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateRoomCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the IdemandCreateRoomService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandCreateRoomCommand(
                    {
                        id: idemandMockRoomData[0].id,
                        type: idemandMockRoomData[0].type,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
