import { IdemandFindRoomByIdController, IdemandFindRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomByIdController', () =>
{
    let controller: IdemandFindRoomByIdController;
    let handler: IdemandFindRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandFindRoomByIdController,
            ],
            providers: [
                {
                    provide : IdemandFindRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandFindRoomByIdController>(IdemandFindRoomByIdController);
        handler = module.get<IdemandFindRoomByIdHandler>(IdemandFindRoomByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandFindRoomByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an room by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main(idemandMockRoomData[0].id)).toBe(idemandMockRoomData[0]);
        });
    });
});
