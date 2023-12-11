import { IdemandFindRoomByIdQuery, IdemandRoomMapper, IdemandRoomResponse } from '@app/idemand/room';
import { IdemandFindRoomByIdService } from '@app/idemand/room/application/find/idemand-find-room-by-id.service';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(IdemandFindRoomByIdQuery)
export class IdemandFindRoomByIdQueryHandler implements IQueryHandler<IdemandFindRoomByIdQuery>
{
    private readonly mapper: IdemandRoomMapper = new IdemandRoomMapper();

    constructor(
        private readonly findRoomByIdService: IdemandFindRoomByIdService,
    ) {}

    async execute(query: IdemandFindRoomByIdQuery): Promise<IdemandRoomResponse>
    {
        const room = await this.findRoomByIdService.main(
            new IdemandRoomId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(room);
    }
}
