import { IdemandCreateRoomController, IdemandCreateRoomHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandCreateRoomController', () =>
{
    let controller: IdemandCreateRoomController;
    let handler: IdemandCreateRoomHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandCreateRoomController,
            ],
            providers: [
                {
                    provide : IdemandCreateRoomHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandCreateRoomController>(IdemandCreateRoomController);
        handler = module.get<IdemandCreateRoomHandler>(IdemandCreateRoomHandler);
    });

    describe('main', () =>
    {
        test('IdemandCreateRoomController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an room created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(
                await controller.main(
                    idemandMockRoomData[0],
                ),
            )
                .toBe(idemandMockRoomData[0]);
        });
    });
});
