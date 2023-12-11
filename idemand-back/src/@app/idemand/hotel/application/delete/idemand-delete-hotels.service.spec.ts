/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdemandIHotelRepository, IdemandMockHotelRepository } from '@app/idemand/hotel';
import { IdemandDeleteHotelsService } from '@app/idemand/hotel/application/delete/idemand-delete-hotels.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandDeleteHotelsService', () =>
{
    let service: IdemandDeleteHotelsService;
    let repository: IdemandIHotelRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IdemandDeleteHotelsService,
                IdemandMockHotelRepository,
                {
                    provide : IdemandIHotelRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IdemandDeleteHotelsService);
        repository = module.get(IdemandIHotelRepository);
    });

    describe('main', () =>
    {
        test('IdemandDeleteHotelsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete hotel and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
