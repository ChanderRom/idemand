/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { IdemandModule } from '@api/idemand/idemand.module';
import { IdemandIHotelRepository, idemandMockHotelData, IdemandMockHotelSeeder } from '@app/idemand/hotel';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import * as _ from 'lodash';
import * as request from 'supertest';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('hotel', () =>
{
    let app: INestApplication;
    let hotelRepository: IdemandIHotelRepository;
    let hotelSeeder: IdemandMockHotelSeeder;

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
                IdemandMockHotelSeeder,
            ],
        })
            .compile();

        mockData = idemandMockHotelData;
        app = module.createNestApplication();
        hotelRepository = module.get<IdemandIHotelRepository>(IdemandIHotelRepository);
        hotelSeeder = module.get<IdemandMockHotelSeeder>(IdemandMockHotelSeeder);

        // seed mock data in memory database
        await hotelRepository.insert(hotelSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelId must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelName property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelName must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelTotalRooms property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRooms: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelTotalRooms must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelBookedRooms property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                bookedRooms: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelBookedRooms must be defined, can not be null');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelId must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelName property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelName must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelTotalRooms property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRooms: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelTotalRooms must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelBookedRooms property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                bookedRooms: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelBookedRooms must be defined, can not be undefined');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelName is too large, has a maximum length of 50', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                name: '***************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelName is too large, has a maximum length of 50');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelTotalRooms is too large, has a maximum length of 50', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRooms: 1.111111111111111e+50,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelTotalRooms is too large, has a maximum length of 50');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelBookedRooms is too large, has a maximum length of 50', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                bookedRooms: 1.111111111111111e+50,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for IdemandHotelBookedRooms is too large, has a maximum length of 50');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelTotalRooms must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                totalRooms: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical Value for IdemandHotelTotalRooms must have a positive sign, this field does not accept negative values');
            });
    });
    test('/REST:POST idemand/hotel/create - Got 400 Conflict, HotelBookedRooms must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                bookedRooms: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical Value for IdemandHotelBookedRooms must have a positive sign, this field does not accept negative values');
            });
    });

    test('/REST:POST idemand/hotel/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST idemand/hotels/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotels/paginate')
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
                    total: hotelSeeder.collectionResponse.length,
                    count: hotelSeeder.collectionResponse.length,
                    rows : hotelSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST idemand/hotels/get', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotels/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    hotelSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST idemand/hotel/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: 'b74daced-d9ba-50a5-a27f-34634035b5c9',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST idemand/hotel/create', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST idemand/hotel/find', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/find')
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

    test('/REST:POST idemand/hotel/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/find/6f544f58-d1b8-57ba-b63c-644878311ec9')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST idemand/hotel/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/idemand/hotel/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT idemand/hotel/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/idemand/hotel/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: 'f2ec8052-360f-5535-87df-f66dc99d66fa',
            })
            .expect(404);
    });

    test('/REST:PUT idemand/hotel/update', () =>
    {
        return request(app.getHttpServer())
            .put('/idemand/hotel/update')
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

    test('/REST:DELETE idemand/hotel/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/idemand/hotel/delete/5aef97d0-b4ae-588f-b746-d039ef438634')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE idemand/hotel/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/idemand/hotel/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL idemandCreateHotel - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandCreateHotelInput!)
                    {
                        idemandCreateHotel (payload:$payload)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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

    test('/GraphQL idemandPaginateHotels', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        idemandPaginateHotels (query:$query constraint:$constraint)
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
                expect(res.body.data.idemandPaginateHotels).toEqual({
                    total: hotelSeeder.collectionResponse.length,
                    count: hotelSeeder.collectionResponse.length,
                    rows : hotelSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL idemandGetHotels', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandGetHotels (query:$query)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                for (const [index, value] of res.body.data.idemandGetHotels.entries())
                {
                    expect(hotelSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL idemandCreateHotel', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandCreateHotelInput!)
                    {
                        idemandCreateHotel (payload:$payload)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandCreateHotel).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandFindHotel - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandFindHotel (query:$query)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                            id: '969778be-44ca-5294-861a-ebe8c8917103',
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

    test('/GraphQL idemandFindHotel', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        idemandFindHotel (query:$query)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandFindHotel.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandFindHotelById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        idemandFindHotelById (id:$id)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'd0e1c39b-3eb5-5bd0-b08a-55333518c0ff',
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

    test('/GraphQL idemandFindHotelById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        idemandFindHotelById (id:$id)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandFindHotelById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandUpdateHotelById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateHotelByIdInput!)
                    {
                        idemandUpdateHotelById (payload:$payload)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '4322c117-444f-5429-9577-1a0059e272c5',
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

    test('/GraphQL idemandUpdateHotelById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateHotelByIdInput!)
                    {
                        idemandUpdateHotelById (payload:$payload)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandUpdateHotelById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandUpdateHotels', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:IdemandUpdateHotelsInput! $query: QueryStatement)
                    {
                        idemandUpdateHotels (payload:$payload query:$query)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandUpdateHotels[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL idemandDeleteHotelById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        idemandDeleteHotelById (id:$id)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '7e98ed19-bee0-53ff-b2f8-ec80dd6c4779',
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

    test('/GraphQL idemandDeleteHotelById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        idemandDeleteHotelById (id:$id)
                        {
                            id
                            name
                            totalRooms
                            bookedRooms
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
                expect(res.body.data.idemandDeleteHotelById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await hotelRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});
