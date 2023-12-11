import { IdemandFindRoomQuery, IdemandIRoomRepository, IdemandMockRoomRepository, IdemandRoomMapper } from '@app/idemand/room';
import { IdemandFindRoomQueryHandler } from '@app/idemand/room/application/find/idemand-find-room.query-handler';
import { IdemandFindRoomService } from '@app/idemand/room/application/find/idemand-find-room.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomQueryHandler', () =>
{
    let queryHandler: IdemandFindRoomQueryHandler;
    let service: IdemandFindRoomService;
    let repository: IdemandMockRoomRepository;
    let mapper: IdemandRoomMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandFindRoomQueryHandler,
                {
                    provide : IdemandIRoomRepository,
                    useClass: IdemandMockRoomRepository,
                },
                {
                    provide : IdemandFindRoomService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandFindRoomQueryHandler>(IdemandFindRoomQueryHandler);
        service = module.get<IdemandFindRoomService>(IdemandFindRoomService);
        repository = <IdemandMockRoomRepository>module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
        mapper = new IdemandRoomMapper();
    });

    describe('main', () =>
    {
        test('IdemandFindRoomQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an room founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new IdemandFindRoomQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
