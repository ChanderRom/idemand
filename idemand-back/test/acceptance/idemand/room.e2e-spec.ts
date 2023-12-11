/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { IdemandModule } from '@api/idemand/idemand.module';
import { IdemandIRoomRepository, idemandMockRoomData, IdemandMockRoomSeeder } from '@app/idemand/room';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('room', () =>
{
    let app: INestApplication;
    let roomRepository: IdemandIRoomRepository;
    let roomSeeder: IdemandMockRoomSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                IdemandModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports   : [ConfigModule],
                    inject    : [ConfigService],
                    useFactory: (configService: ConfigService) =>
                    {
                        return {
                            dialect       : configService.get('TEST_DATABASE_DIALECT'),
                            storage       : configService.get('TEST_DATABASE_STORAGE'),
                            host          : configService.get('TEST_DATABASE_HOST'),
                            port          : +configService.get('TEST_DATABASE_PORT'),
                            username      : configService.get('TEST_DATABASE_USER'),
                            password      : configService.get('TEST_DATABASE_PASSWORD'),
                            database      : configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize   : configService.get('TEST_DATABASE_SYNCHRONIZE'),
                            logging       : configService.get('TEST_DATABASE_LOGGIN') === 'true' ? console.log : false,
                            autoLoadModels: true,
                            models        : [],
                        };
                    },
                }),
            ],
            providers: [
                IdemandMockRoomSeeder,
            ],
        })
            .compile();

        mockData = idemandMockRoomData;
        app = module.createNestApplication();
        roomRepository = module.get<IdemandIRoomRepository>(IdemandIRoomRepository);
        roomSeeder = module.get<IdemandMockRoomSeeder>(IdemandMockRoomSeeder);

        // seed mock data in memory database
        await roomRepository.insert(roomSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomId must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomType property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                type: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomType must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomPrice property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomPrice must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomDate property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                date: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomDate must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomId must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomType property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                type: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomType must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomPrice property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomPrice must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomDate property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                date: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomDate must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/room/create - Got 400 Conflict, RoomId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandRoomId is not allowed, must be a length of 36');
            });
    });


    test('/REST:POST idemand/room/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST idemand/rooms/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/rooms/paginate')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual({
                    total: roomSeeder.collectionResponse.length,
                    count: roomSeeder.collectionResponse.length,
                    rows : roomSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST idemand/rooms/get', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/rooms/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    roomSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST idemand/room/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '46389204-3837-5d04-a9ff-65b50ed1ff8c',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST idemand/room/create', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST idemand/room/find', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:POST idemand/room/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/find/5b5a0ebe-744e-5e39-9e50-675eaa4a8cb6')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST idemand/room/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/room/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT idemand/room/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/idemand/room/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: 'd4e68c02-0917-5204-a478-bdfa0453ea16',
            })
            .expect(404);
    });

    test('/REST:PUT idemand/room/update', () =>
    {
        return request(app.getHttpServer())
            .put('/idemand/room/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:DELETE idemand/room/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/idemand/room/delete/7b5f2f98-a2f5-5ed6-9c73-bb4f2002bf03')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE idemand/room/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/idemand/room/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL idemandCreateRoom - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandCreateRoomInput!)
                    {
                        idemandCreateRoom (payload:$payload)
                        {
                            id
                            type
                            price
                            date
                        }
                    }
                `,
                variables:
                {
                    payload: _.omit(mockData[0], ['createdAt','updatedAt','deletedAt']),
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(409);
                expect(res.body.errors[0].extensions.originalError.message).toContain('already exist in database');
            });
    });

    test('/GraphQL idemandPaginateRooms', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        idemandPaginateRooms (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandPaginateRooms).toEqual({
                    total: roomSeeder.collectionResponse.length,
                    count: roomSeeder.collectionResponse.length,
                    rows : roomSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL idemandGetRooms', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandGetRooms (query:$query)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then(res =>
            {
                for (const [index, value] of res.body.data.idemandGetRooms.entries())
                {
                    expect(roomSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL idemandCreateRoom', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandCreateRoomInput!)
                    {
                        idemandCreateRoom (payload:$payload)
                        {
                            id
                            type
                            price
                            date
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandCreateRoom).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandFindRoom - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandFindRoom (query:$query)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '6a70aed3-32ae-568f-a406-5816bb55af68',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL idemandFindRoom', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandFindRoom (query:$query)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandFindRoom.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandFindRoomById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        idemandFindRoomById (id:$id)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '7b3fe4b7-d249-5451-9f4f-1a95e393c206',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL idemandFindRoomById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        idemandFindRoomById (id:$id)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandFindRoomById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandUpdateRoomById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateRoomByIdInput!)
                    {
                        idemandUpdateRoomById (payload:$payload)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '81c53b40-dd38-5a7b-b635-d489c41d4153',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL idemandUpdateRoomById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateRoomByIdInput!)
                    {
                        idemandUpdateRoomById (payload:$payload)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandUpdateRoomById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandUpdateRooms', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateRoomsInput! $query: QueryStatement)
                    {
                        idemandUpdateRooms (payload:$payload query:$query)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                    query: {
                        where: {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandUpdateRooms[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandDeleteRoomById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        idemandDeleteRoomById (id:$id)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'f2655d94-9a5c-54c3-9427-de37dc136722',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL idemandDeleteRoomById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        idemandDeleteRoomById (id:$id)
                        {
                            id
                            type
                            price
                            date
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.idemandDeleteRoomById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await roomRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
