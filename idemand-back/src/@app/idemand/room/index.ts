// export commands
export { IdemandCreateRoomCommand } from './application/create/idemand-create-room.command';
export { IdemandCreateRoomsCommand } from './application/create/idemand-create-rooms.command';
export { IdemandUpdateRoomByIdCommand } from './application/update/idemand-update-room-by-id.command';
export { IdemandUpdateRoomsCommand } from './application/update/idemand-update-rooms.command';
export { IdemandUpsertRoomCommand } from './application/upsert/idemand-upsert-room.command';
export { IdemandDeleteRoomByIdCommand } from './application/delete/idemand-delete-room-by-id.command';
export { IdemandDeleteRoomsCommand } from './application/delete/idemand-delete-rooms.command';

// export queries
export { IdemandPaginateRoomsQuery } from './application/paginate/idemand-paginate-rooms.query';
export { IdemandGetRoomsQuery } from './application/get/idemand-get-rooms.query';
export { IdemandFindRoomQuery } from './application/find/idemand-find-room.query';
export { IdemandFindRoomByIdQuery } from './application/find/idemand-find-room-by-id.query';
export { IdemandRawSQLRoomsQuery } from './application/raw-sql/idemand-raw-sql-rooms.query';

// export mocks
export { idemandMockRoomData } from './infrastructure/mock/idemand-mock-room.data';
export { IdemandMockRoomSeeder } from './infrastructure/mock/idemand-mock-room.seeder';
export { IdemandMockRoomRepository } from './infrastructure/mock/idemand-mock-room.repository';

// export events
export { IdemandAddRoomsContextEvent } from './application/events/idemand-add-rooms-context.event';
export { IdemandCreatedRoomsEvent } from './application/events/idemand-created-rooms.event';
export { IdemandCreatedRoomEvent } from './application/events/idemand-created-room.event';
export { IdemandDeletedRoomsEvent } from './application/events/idemand-deleted-rooms.event';
export { IdemandDeletedRoomEvent } from './application/events/idemand-deleted-room.event';
export { IdemandUpdatedRoomsEvent } from './application/events/idemand-updated-rooms.event';
export { IdemandUpdatedRoomEvent } from './application/events/idemand-updated-room.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { IdemandRoom } from './domain/idemand-room.aggregate';
export { IdemandRoomMapper } from './domain/idemand-room.mapper';
export { IdemandIRoomRepository } from './domain/idemand-room.repository';
export { IdemandRoomResponse } from './domain/idemand-room.response';

// infrastructure
export { IdemandRoomModel } from './infrastructure/sequelize/idemand-sequelize-room.model';
export { IdemandSequelizeRoomRepository } from './infrastructure/sequelize/idemand-sequelize-room.repository';

// sagas
export { IdemandRoomSagas } from './application/sagas/idemand-room.sagas';

// command handlers
import { IdemandCreateRoomCommandHandler } from './application/create/idemand-create-room.command-handler';
import { IdemandCreateRoomsCommandHandler } from './application/create/idemand-create-rooms.command-handler';
import { IdemandUpdateRoomByIdCommandHandler } from './application/update/idemand-update-room-by-id.command-handler';
import { IdemandUpdateRoomsCommandHandler } from './application/update/idemand-update-rooms.command-handler';
import { IdemandUpsertRoomCommandHandler } from './application/upsert/idemand-upsert-room.command-handler';
import { IdemandDeleteRoomByIdCommandHandler } from './application/delete/idemand-delete-room-by-id.command-handler';
import { IdemandDeleteRoomsCommandHandler } from './application/delete/idemand-delete-rooms.command-handler';

// query handlers
import { IdemandPaginateRoomsQueryHandler } from './application/paginate/idemand-paginate-rooms.query-handler';
import { IdemandGetRoomsQueryHandler } from './application/get/idemand-get-rooms.query-handler';
import { IdemandFindRoomQueryHandler } from './application/find/idemand-find-room.query-handler';
import { IdemandFindRoomByIdQueryHandler } from './application/find/idemand-find-room-by-id.query-handler';
import { IdemandRawSQLRoomsQueryHandler } from './application/raw-sql/idemand-raw-sql-rooms.query-handler';

// event handlers
import { IdemandCreatedRoomEventHandler } from './application/events/idemand-created-room.event-handler';
import { IdemandCreatedRoomsEventHandler } from './application/events/idemand-created-rooms.event-handler';
import { IdemandUpdatedRoomEventHandler } from './application/events/idemand-updated-room.event-handler';
import { IdemandUpdatedRoomsEventHandler } from './application/events/idemand-updated-rooms.event-handler';
import { IdemandDeletedRoomEventHandler } from './application/events/idemand-deleted-room.event-handler';
import { IdemandDeletedRoomsEventHandler } from './application/events/idemand-deleted-rooms.event-handler';

// services
import { IdemandCreateRoomService } from './application/create/idemand-create-room.service';
import { IdemandCreateRoomsService } from './application/create/idemand-create-rooms.service';
import { IdemandPaginateRoomsService } from './application/paginate/idemand-paginate-rooms.service';
import { IdemandGetRoomsService } from './application/get/idemand-get-rooms.service';
import { IdemandFindRoomService } from './application/find/idemand-find-room.service';
import { IdemandFindRoomByIdService } from './application/find/idemand-find-room-by-id.service';
import { IdemandRawSQLRoomsService } from './application/raw-sql/idemand-raw-sql-rooms.service';
import { IdemandUpdateRoomByIdService } from './application/update/idemand-update-room-by-id.service';
import { IdemandUpdateRoomsService } from './application/update/idemand-update-rooms.service';
import { IdemandUpsertRoomService } from './application/upsert/idemand-upsert-room.service';
import { IdemandDeleteRoomByIdService } from './application/delete/idemand-delete-room-by-id.service';
import { IdemandDeleteRoomsService } from './application/delete/idemand-delete-rooms.service';

export const IdemandRoomHandlers = [
    // commands
    IdemandCreateRoomCommandHandler,
    IdemandCreateRoomsCommandHandler,
    IdemandUpdateRoomByIdCommandHandler,
    IdemandUpdateRoomsCommandHandler,
    IdemandUpsertRoomCommandHandler,
    IdemandDeleteRoomByIdCommandHandler,
    IdemandDeleteRoomsCommandHandler,

    // queries
    IdemandPaginateRoomsQueryHandler,
    IdemandGetRoomsQueryHandler,
    IdemandFindRoomQueryHandler,
    IdemandFindRoomByIdQueryHandler,
    IdemandRawSQLRoomsQueryHandler,

    // events
    IdemandCreatedRoomEventHandler,
    IdemandCreatedRoomsEventHandler,
    IdemandUpdatedRoomEventHandler,
    IdemandUpdatedRoomsEventHandler,
    IdemandDeletedRoomEventHandler,
    IdemandDeletedRoomsEventHandler,
];

export const IdemandRoomServices = [
    IdemandCreateRoomService,
    IdemandCreateRoomsService,
    IdemandPaginateRoomsService,
    IdemandGetRoomsService,
    IdemandFindRoomService,
    IdemandFindRoomByIdService,
    IdemandRawSQLRoomsService,
    IdemandUpdateRoomByIdService,
    IdemandUpdateRoomsService,
    IdemandUpsertRoomService,
    IdemandDeleteRoomByIdService,
    IdemandDeleteRoomsService,
];