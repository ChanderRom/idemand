import { idemandMockRoomData, IdemandUpsertRoomCommand } from '@app/idemand/room';
import { IdemandUpsertRoomCommandHandler } from '@app/idemand/room/application/upsert/idemand-upsert-room.command-handler';
import { IdemandUpsertRoomService } from '@app/idemand/room/application/upsert/idemand-upsert-room.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpsertRoomCommandHandler', () =>
{
    let commandHandler: IdemandUpsertRoomCommandHandler;
    let service: IdemandUpsertRoomService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandUpsertRoomCommandHandler,
                {
                    provide : IdemandUpsertRoomService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IdemandUpsertRoomCommandHandler>(IdemandUpsertRoomCommandHandler);
        service = module.get<IdemandUpsertRoomService>(IdemandUpsertRoomService);
    });

    describe('main', () =>
    {
        test('UpsertRoomCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the IdemandUpsertRoomService', async () =>
        {
            expect(await commandHandler.execute(
                new IdemandUpsertRoomCommand(
                    {
                        id: idemandMockRoomData[0].id,
                        type: idemandMockRoomData[0].type,
                        price: idemandMockRoomData[0].price,
                        date: idemandMockRoomData[0].date,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
