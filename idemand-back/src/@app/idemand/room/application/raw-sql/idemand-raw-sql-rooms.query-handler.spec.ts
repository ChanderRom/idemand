import { IdemandIRoomRepository, IdemandMockRoomRepository, IdemandRawSQLRoomsQuery, IdemandRoomMapper } from '@app/idemand/room';
import { IdemandRawSQLRoomsQueryHandler } from '@app/idemand/room/application/raw-sql/idemand-raw-sql-rooms.query-handler';
import { IdemandRawSQLRoomsService } from '@app/idemand/room/application/raw-sql/idemand-raw-sql-rooms.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLRoomsQueryHandler', () =>
{
    let queryHandler: IdemandRawSQLRoomsQueryHandler;
    let service: IdemandRawSQLRoomsService;
    let repository: IdemandMockRoomRepository;
    let mapper: IdemandRoomMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandRawSQLRoomsQueryHandler,
                {
                    provide : IdemandIRoomRepository,
                    useClass: IdemandMockRoomRepository,
                },
                {
                    provide : IdemandRawSQLRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandRawSQLRoomsQueryHandler>(IdemandRawSQLRoomsQueryHandler);
        service = module.get<IdemandRawSQLRoomsService>(IdemandRawSQLRoomsService);
        repository = <IdemandMockRoomRepository>module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
        mapper = new IdemandRoomMapper();
    });

    describe('main', () =>
    {
        test('IdemandRawSQLRoomsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an rooms founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new IdemandRawSQLRoomsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
