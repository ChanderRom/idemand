import { IdemandUpdateRoomByIdController, IdemandUpdateRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandUpdateRoomByIdController', () =>
{
    let controller: IdemandUpdateRoomByIdController;
    let handler: IdemandUpdateRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandUpdateRoomByIdController,
            ],
            providers: [
                {
                    provide : IdemandUpdateRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandUpdateRoomByIdController>(IdemandUpdateRoomByIdController);
        handler = module.get<IdemandUpdateRoomByIdHandler>(IdemandUpdateRoomByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandUpdateRoomByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a room updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main(idemandMockRoomData[0])).toBe(idemandMockRoomData[0]);
        });
    });
});
