import { IdemandDeleteRoomByIdCommand, idemandMockRoomData } from '@app/idemand/room';
import { IdemandDeleteRoomByIdCommandHandler } from '@app/idemand/room/application/delete/idemand-delete-room-by-id.command-handler';
import { IdemandDeleteRoomByIdService } from '@app/idemand/room/application/delete/idemand-delete-room-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomByIdCommandHandler', () =>
{
    let commandHandler: IdemandDeleteRoomByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandDeleteRoomByIdCommandHandler,
                {
                    provide : IdemandDeleteRoomByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandDeleteRoomByIdCommandHandler>(IdemandDeleteRoomByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the IdemandDeleteRoomByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandDeleteRoomByIdCommand(
                    idemandMockRoomData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
