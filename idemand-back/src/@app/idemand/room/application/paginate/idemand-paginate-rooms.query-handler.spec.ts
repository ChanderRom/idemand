import { IdemandIRoomRepository, IdemandMockRoomRepository, IdemandPaginateRoomsQuery } from '@app/idemand/room';
import { IdemandPaginateRoomsQueryHandler } from '@app/idemand/room/application/paginate/idemand-paginate-rooms.query-handler';
import { IdemandPaginateRoomsService } from '@app/idemand/room/application/paginate/idemand-paginate-rooms.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandPaginateRoomsQueryHandler', () =>
{
    let queryHandler: IdemandPaginateRoomsQueryHandler;
    let service: IdemandPaginateRoomsService;
    let repository: IdemandMockRoomRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandPaginateRoomsQueryHandler,
                {
                    provide : IdemandIRoomRepository,
                    useClass: IdemandMockRoomRepository,
                },
                {
                    provide : IdemandPaginateRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandPaginateRoomsQueryHandler>(IdemandPaginateRoomsQueryHandler);
        service = module.get<IdemandPaginateRoomsService>(IdemandPaginateRoomsService);
        repository = <IdemandMockRoomRepository>module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
    });

    describe('main', () =>
    {
        test('IdemandPaginateRoomsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an rooms paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new IdemandPaginateRoomsQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
