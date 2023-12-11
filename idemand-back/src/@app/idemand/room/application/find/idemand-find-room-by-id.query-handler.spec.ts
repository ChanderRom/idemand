import { IdemandFindRoomByIdQuery, IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomRepository, IdemandRoomMapper } from '@app/idemand/room';
import { IdemandFindRoomByIdQueryHandler } from '@app/idemand/room/application/find/idemand-find-room-by-id.query-handler';
import { IdemandFindRoomByIdService } from '@app/idemand/room/application/find/idemand-find-room-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('IdemandFindRoomByIdQueryHandler', () =>
{
    let queryHandler: IdemandFindRoomByIdQueryHandler;
    let service: IdemandFindRoomByIdService;
    let repository: IdemandMockRoomRepository;
    let mapper: IdemandRoomMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandFindRoomByIdQueryHandler,
                {
                    provide : IdemandIRoomRepository,
                    useClass: IdemandMockRoomRepository,
                },
                {
                    provide : IdemandFindRoomByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandFindRoomByIdQueryHandler>(IdemandFindRoomByIdQueryHandler);
        service = module.get<IdemandFindRoomByIdService>(IdemandFindRoomByIdService);
        repository = <IdemandMockRoomRepository>module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
        mapper = new IdemandRoomMapper();
    });

    describe('main', () =>
    {
        test('FindRoomByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an room founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new IdemandFindRoomByIdQuery(
                    idemandMockRoomData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
