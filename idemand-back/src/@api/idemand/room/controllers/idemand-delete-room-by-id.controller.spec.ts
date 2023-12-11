/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandDeleteRoomByIdController, IdemandDeleteRoomByIdHandler } from '@api/idemand/room';
import { idemandMockRoomData } from '@app/idemand/room';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteRoomByIdController', () =>
{
    let controller: IdemandDeleteRoomByIdController;
    let handler: IdemandDeleteRoomByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                IdemandDeleteRoomByIdController,
            ],
            providers: [
                {
                    provide : IdemandDeleteRoomByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<IdemandDeleteRoomByIdController>(IdemandDeleteRoomByIdController);
        handler = module.get<IdemandDeleteRoomByIdHandler>(IdemandDeleteRoomByIdHandler);
    });

    describe('main', () =>
    {
        test('IdemandDeleteRoomByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an room deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(idemandMockRoomData[0])));
            expect(await controller.main(idemandMockRoomData[0].id)).toBe(idemandMockRoomData[0]);
        });
    });
});
