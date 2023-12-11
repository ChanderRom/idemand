import { IdemandCreateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomsHandler', () =>
{
    let handler: IdemandCreateRoomsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandCreateRoomsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<IdemandCreateRoomsHandler>(IdemandCreateRoomsHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an idemandMockRoomData created', async () =>
        {
            expect(await handler.main(idemandMockRoomData)).toBe(true);
        });
    });
});
