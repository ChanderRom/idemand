import { IdemandCreateRoomsController, IdemandCreateRoomsHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomsController', () =>
{
    let controller: IdemandCreateRoomsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                IdemandCreateRoomsController,
            ],
            providers: [
                {
                    provide : IdemandCreateRoomsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandCreateRoomsController>(IdemandCreateRoomsController);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an idemandMockRoomData created', async () =>
        {
            expect(
                await controller.main(
                    idemandMockRoomData,
                ),
            )
                .toBe(undefined);
        });
    });
});
