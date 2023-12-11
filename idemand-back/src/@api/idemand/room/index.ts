// export DTOs
export { IdemandRoomDto } from './dto/idemand-room.dto';
export { IdemandCreateRoomDto } from './dto/idemand-create-room.dto';
export { IdemandUpdateRoomByIdDto } from './dto/idemand-update-room-by-id.dto';
export { IdemandUpdateRoomsDto } from './dto/idemand-update-rooms.dto';

// export handlers
export { IdemandCreateRoomHandler } from './handlers/idemand-create-room.handler';
export { IdemandCreateRoomsHandler } from './handlers/idemand-create-rooms.handler';
export { IdemandPaginateRoomsHandler } from './handlers/idemand-paginate-rooms.handler';
export { IdemandGetRoomsHandler } from './handlers/idemand-get-rooms.handler';
export { IdemandFindRoomByIdHandler } from './handlers/idemand-find-room-by-id.handler';
export { IdemandFindRoomHandler } from './handlers/idemand-find-room.handler';
export { IdemandUpdateRoomByIdHandler } from './handlers/idemand-update-room-by-id.handler';
export { IdemandUpdateRoomsHandler } from './handlers/idemand-update-rooms.handler';
export { IdemandUpsertRoomHandler } from './handlers/idemand-upsert-room.handler';
export { IdemandDeleteRoomByIdHandler } from './handlers/idemand-delete-room-by-id.handler';
export { IdemandDeleteRoomsHandler } from './handlers/idemand-delete-rooms.handler';

// export controllers
export { IdemandCreateRoomController } from './controllers/idemand-create-room.controller';
export { IdemandCreateRoomsController } from './controllers/idemand-create-rooms.controller';
export { IdemandPaginateRoomsController } from './controllers/idemand-paginate-rooms.controller';
export { IdemandGetRoomsController } from './controllers/idemand-get-rooms.controller';
export { IdemandFindRoomByIdController } from './controllers/idemand-find-room-by-id.controller';
export { IdemandFindRoomController } from './controllers/idemand-find-room.controller';
export { IdemandUpdateRoomByIdController } from './controllers/idemand-update-room-by-id.controller';
export { IdemandUpdateRoomsController } from './controllers/idemand-update-rooms.controller';
export { IdemandUpsertRoomController } from './controllers/idemand-upsert-room.controller';
export { IdemandDeleteRoomByIdController } from './controllers/idemand-delete-room-by-id.controller';
export { IdemandDeleteRoomsController } from './controllers/idemand-delete-rooms.controller';

// exports resolvers
export { IdemandCreateRoomResolver } from './resolvers/idemand-create-room.resolver';
export { IdemandCreateRoomsResolver } from './resolvers/idemand-create-rooms.resolver';
export { IdemandPaginateRoomsResolver } from './resolvers/idemand-paginate-rooms.resolver';
export { IdemandGetRoomsResolver } from './resolvers/idemand-get-rooms.resolver';
export { IdemandFindRoomByIdResolver } from './resolvers/idemand-find-room-by-id.resolver';
export { IdemandFindRoomResolver } from './resolvers/idemand-find-room.resolver';
export { IdemandUpdateRoomByIdResolver } from './resolvers/idemand-update-room-by-id.resolver';
export { IdemandUpdateRoomsResolver } from './resolvers/idemand-update-rooms.resolver';
export { IdemandUpsertRoomResolver } from './resolvers/idemand-upsert-room.resolver';
export { IdemandDeleteRoomByIdResolver } from './resolvers/idemand-delete-room-by-id.resolver';
export { IdemandDeleteRoomsResolver } from './resolvers/idemand-delete-rooms.resolver';

// controllers
import { IdemandCreateRoomController } from './controllers/idemand-create-room.controller';
import { IdemandCreateRoomsController } from './controllers/idemand-create-rooms.controller';
import { IdemandPaginateRoomsController } from './controllers/idemand-paginate-rooms.controller';
import { IdemandGetRoomsController } from './controllers/idemand-get-rooms.controller';
import { IdemandFindRoomByIdController } from './controllers/idemand-find-room-by-id.controller';
import { IdemandFindRoomController } from './controllers/idemand-find-room.controller';
import { IdemandUpdateRoomByIdController } from './controllers/idemand-update-room-by-id.controller';
import { IdemandUpdateRoomsController } from './controllers/idemand-update-rooms.controller';
import { IdemandUpsertRoomController } from './controllers/idemand-upsert-room.controller';
import { IdemandDeleteRoomByIdController } from './controllers/idemand-delete-room-by-id.controller';
import { IdemandDeleteRoomsController } from './controllers/idemand-delete-rooms.controller';

// resolvers
import { IdemandCreateRoomResolver } from './resolvers/idemand-create-room.resolver';
import { IdemandCreateRoomsResolver } from './resolvers/idemand-create-rooms.resolver';
import { IdemandPaginateRoomsResolver } from './resolvers/idemand-paginate-rooms.resolver';
import { IdemandGetRoomsResolver } from './resolvers/idemand-get-rooms.resolver';
import { IdemandFindRoomByIdResolver } from './resolvers/idemand-find-room-by-id.resolver';
import { IdemandFindRoomResolver } from './resolvers/idemand-find-room.resolver';
import { IdemandUpdateRoomByIdResolver } from './resolvers/idemand-update-room-by-id.resolver';
import { IdemandUpdateRoomsResolver } from './resolvers/idemand-update-rooms.resolver';
import { IdemandUpsertRoomResolver } from './resolvers/idemand-upsert-room.resolver';
import { IdemandDeleteRoomByIdResolver } from './resolvers/idemand-delete-room-by-id.resolver';
import { IdemandDeleteRoomsResolver } from './resolvers/idemand-delete-rooms.resolver';

// handlers
import { IdemandCreateRoomHandler } from './handlers/idemand-create-room.handler';
import { IdemandCreateRoomsHandler } from './handlers/idemand-create-rooms.handler';
import { IdemandPaginateRoomsHandler } from './handlers/idemand-paginate-rooms.handler';
import { IdemandGetRoomsHandler } from './handlers/idemand-get-rooms.handler';
import { IdemandFindRoomByIdHandler } from './handlers/idemand-find-room-by-id.handler';
import { IdemandFindRoomHandler } from './handlers/idemand-find-room.handler';
import { IdemandUpdateRoomByIdHandler } from './handlers/idemand-update-room-by-id.handler';
import { IdemandUpdateRoomsHandler } from './handlers/idemand-update-rooms.handler';
import { IdemandUpsertRoomHandler } from './handlers/idemand-upsert-room.handler';
import { IdemandDeleteRoomByIdHandler } from './handlers/idemand-delete-room-by-id.handler';
import { IdemandDeleteRoomsHandler } from './handlers/idemand-delete-rooms.handler';

// seeder
import { IdemandRoomSeeder } from './seeder/idemand-room.seeder';

export const IdemandRoomApiControllers = [
    IdemandCreateRoomController,
    IdemandCreateRoomsController,
    IdemandPaginateRoomsController,
    IdemandGetRoomsController,
    IdemandFindRoomByIdController,
    IdemandFindRoomController,
    IdemandUpdateRoomByIdController,
    IdemandUpdateRoomsController,
    IdemandUpsertRoomController,
    IdemandDeleteRoomByIdController,
    IdemandDeleteRoomsController,
];

export const IdemandRoomApiResolvers = [
    IdemandCreateRoomResolver,
    IdemandCreateRoomsResolver,
    IdemandPaginateRoomsResolver,
    IdemandGetRoomsResolver,
    IdemandFindRoomByIdResolver,
    IdemandFindRoomResolver,
    IdemandUpdateRoomByIdResolver,
    IdemandUpdateRoomsResolver,
    IdemandUpsertRoomResolver,
    IdemandDeleteRoomByIdResolver,
    IdemandDeleteRoomsResolver,
];

export const IdemandRoomApiHandlers = [
    IdemandCreateRoomHandler,
    IdemandCreateRoomsHandler,
    IdemandPaginateRoomsHandler,
    IdemandGetRoomsHandler,
    IdemandFindRoomByIdHandler,
    IdemandFindRoomHandler,
    IdemandUpdateRoomByIdHandler,
    IdemandUpdateRoomsHandler,
    IdemandUpsertRoomHandler,
    IdemandDeleteRoomByIdHandler,
    IdemandDeleteRoomsHandler,
];

export const IdemandRoomApiServices = [
    IdemandRoomSeeder,
];
