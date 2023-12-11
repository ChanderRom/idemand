// export commands
export { IdemandCreateHotelCommand } from './application/create/idemand-create-hotel.command';
export { IdemandCreateHotelsCommand } from './application/create/idemand-create-hotels.command';
export { IdemandUpdateHotelByIdCommand } from './application/update/idemand-update-hotel-by-id.command';
export { IdemandUpdateHotelsCommand } from './application/update/idemand-update-hotels.command';
export { IdemandUpsertHotelCommand } from './application/upsert/idemand-upsert-hotel.command';
export { IdemandDeleteHotelByIdCommand } from './application/delete/idemand-delete-hotel-by-id.command';
export { IdemandDeleteHotelsCommand } from './application/delete/idemand-delete-hotels.command';

// export queries
export { IdemandPaginateHotelsQuery } from './application/paginate/idemand-paginate-hotels.query';
export { IdemandGetHotelsQuery } from './application/get/idemand-get-hotels.query';
export { IdemandFindHotelQuery } from './application/find/idemand-find-hotel.query';
export { IdemandFindHotelByIdQuery } from './application/find/idemand-find-hotel-by-id.query';
export { IdemandRawSQLHotelsQuery } from './application/raw-sql/idemand-raw-sql-hotels.query';

// export mocks
export { idemandMockHotelData } from './infrastructure/mock/idemand-mock-hotel.data';
export { IdemandMockHotelSeeder } from './infrastructure/mock/idemand-mock-hotel.seeder';
export { IdemandMockHotelRepository } from './infrastructure/mock/idemand-mock-hotel.repository';

// export events
export { IdemandAddHotelsContextEvent } from './application/events/idemand-add-hotels-context.event';
export { IdemandCreatedHotelsEvent } from './application/events/idemand-created-hotels.event';
export { IdemandCreatedHotelEvent } from './application/events/idemand-created-hotel.event';
export { IdemandDeletedHotelsEvent } from './application/events/idemand-deleted-hotels.event';
export { IdemandDeletedHotelEvent } from './application/events/idemand-deleted-hotel.event';
export { IdemandUpdatedHotelsEvent } from './application/events/idemand-updated-hotels.event';
export { IdemandUpdatedHotelEvent } from './application/events/idemand-updated-hotel.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { IdemandHotel } from './domain/idemand-hotel.aggregate';
export { IdemandHotelMapper } from './domain/idemand-hotel.mapper';
export { IdemandIHotelRepository } from './domain/idemand-hotel.repository';
export { IdemandHotelResponse } from './domain/idemand-hotel.response';

// infrastructure
export { IdemandHotelModel } from './infrastructure/sequelize/idemand-sequelize-hotel.model';
export { IdemandSequelizeHotelRepository } from './infrastructure/sequelize/idemand-sequelize-hotel.repository';

// sagas
export { IdemandHotelSagas } from './application/sagas/idemand-hotel.sagas';

// command handlers
import { IdemandCreateHotelCommandHandler } from './application/create/idemand-create-hotel.command-handler';
import { IdemandCreateHotelsCommandHandler } from './application/create/idemand-create-hotels.command-handler';
import { IdemandUpdateHotelByIdCommandHandler } from './application/update/idemand-update-hotel-by-id.command-handler';
import { IdemandUpdateHotelsCommandHandler } from './application/update/idemand-update-hotels.command-handler';
import { IdemandUpsertHotelCommandHandler } from './application/upsert/idemand-upsert-hotel.command-handler';
import { IdemandDeleteHotelByIdCommandHandler } from './application/delete/idemand-delete-hotel-by-id.command-handler';
import { IdemandDeleteHotelsCommandHandler } from './application/delete/idemand-delete-hotels.command-handler';

// query handlers
import { IdemandPaginateHotelsQueryHandler } from './application/paginate/idemand-paginate-hotels.query-handler';
import { IdemandGetHotelsQueryHandler } from './application/get/idemand-get-hotels.query-handler';
import { IdemandFindHotelQueryHandler } from './application/find/idemand-find-hotel.query-handler';
import { IdemandFindHotelByIdQueryHandler } from './application/find/idemand-find-hotel-by-id.query-handler';
import { IdemandRawSQLHotelsQueryHandler } from './application/raw-sql/idemand-raw-sql-hotels.query-handler';

// event handlers
import { IdemandCreatedHotelEventHandler } from './application/events/idemand-created-hotel.event-handler';
import { IdemandCreatedHotelsEventHandler } from './application/events/idemand-created-hotels.event-handler';
import { IdemandUpdatedHotelEventHandler } from './application/events/idemand-updated-hotel.event-handler';
import { IdemandUpdatedHotelsEventHandler } from './application/events/idemand-updated-hotels.event-handler';
import { IdemandDeletedHotelEventHandler } from './application/events/idemand-deleted-hotel.event-handler';
import { IdemandDeletedHotelsEventHandler } from './application/events/idemand-deleted-hotels.event-handler';

// services
import { IdemandCreateHotelService } from './application/create/idemand-create-hotel.service';
import { IdemandCreateHotelsService } from './application/create/idemand-create-hotels.service';
import { IdemandPaginateHotelsService } from './application/paginate/idemand-paginate-hotels.service';
import { IdemandGetHotelsService } from './application/get/idemand-get-hotels.service';
import { IdemandFindHotelService } from './application/find/idemand-find-hotel.service';
import { IdemandFindHotelByIdService } from './application/find/idemand-find-hotel-by-id.service';
import { IdemandRawSQLHotelsService } from './application/raw-sql/idemand-raw-sql-hotels.service';
import { IdemandUpdateHotelByIdService } from './application/update/idemand-update-hotel-by-id.service';
import { IdemandUpdateHotelsService } from './application/update/idemand-update-hotels.service';
import { IdemandUpsertHotelService } from './application/upsert/idemand-upsert-hotel.service';
import { IdemandDeleteHotelByIdService } from './application/delete/idemand-delete-hotel-by-id.service';
import { IdemandDeleteHotelsService } from './application/delete/idemand-delete-hotels.service';

export const IdemandHotelHandlers = [
    // commands
    IdemandCreateHotelCommandHandler,
    IdemandCreateHotelsCommandHandler,
    IdemandUpdateHotelByIdCommandHandler,
    IdemandUpdateHotelsCommandHandler,
    IdemandUpsertHotelCommandHandler,
    IdemandDeleteHotelByIdCommandHandler,
    IdemandDeleteHotelsCommandHandler,

    // queries
    IdemandPaginateHotelsQueryHandler,
    IdemandGetHotelsQueryHandler,
    IdemandFindHotelQueryHandler,
    IdemandFindHotelByIdQueryHandler,
    IdemandRawSQLHotelsQueryHandler,

    // events
    IdemandCreatedHotelEventHandler,
    IdemandCreatedHotelsEventHandler,
    IdemandUpdatedHotelEventHandler,
    IdemandUpdatedHotelsEventHandler,
    IdemandDeletedHotelEventHandler,
    IdemandDeletedHotelsEventHandler,
];

export const IdemandHotelServices = [
    IdemandCreateHotelService,
    IdemandCreateHotelsService,
    IdemandPaginateHotelsService,
    IdemandGetHotelsService,
    IdemandFindHotelService,
    IdemandFindHotelByIdService,
    IdemandRawSQLHotelsService,
    IdemandUpdateHotelByIdService,
    IdemandUpdateHotelsService,
    IdemandUpsertHotelService,
    IdemandDeleteHotelByIdService,
    IdemandDeleteHotelsService,
];