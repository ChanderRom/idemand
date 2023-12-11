import { IdemandGetRoomsQuery, IdemandIRoomRepository, IdemandMockRoomRepository, IdemandRoomMapper } from '@app/idemand/room';
import { IdemandGetRoomsQueryHandler } from '@app/idemand/room/application/get/idemand-get-rooms.query-handler';
import { IdemandGetRoomsService } from '@app/idemand/room/application/get/idemand-get-rooms.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetRoomsQueryHandler', () =>
{
    let queryHandler: IdemandGetRoomsQueryHandler;
    let service: IdemandGetRoomsService;
    let repository: IdemandMockRoomRepository;
    let mapper: IdemandRoomMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IdemandGetRoomsQueryHandler,
                {
                    provide : IdemandIRoomRepository,
                    useClass: IdemandMockRoomRepository,
                },
                {
                    provide : IdemandGetRoomsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<IdemandGetRoomsQueryHandler>(IdemandGetRoomsQueryHandler);
        service = module.get<IdemandGetRoomsService>(IdemandGetRoomsService);
        repository = <IdemandMockRoomRepository>module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
        mapper = new IdemandRoomMapper();
    });

    describe('main', () =>
    {
        test('IdemandGetRoomsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an rooms founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new IdemandGetRoomsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
