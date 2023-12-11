/* eslint-disable key-spacing */
import { IdemandUpsertRoomCommand } from '@app/idemand/room';
import { IdemandUpsertRoomService } from '@app/idemand/room/application/upsert/idemand-upsert-room.service';
import {
    IdemandRoomId,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpsertRoomCommand)
export class IdemandUpsertRoomCommandHandler implements ICommandHandler<IdemandUpsertRoomCommand>
{
    constructor(
        private readonly upsertRoomService: IdemandUpsertRoomService,
    ) {}

    async execute(command: IdemandUpsertRoomCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertRoomService.main(
            {
                id: new IdemandRoomId(command.payload.id),
                type: new IdemandRoomType(command.payload.type),
            },
            command.cQMetadata,
        );
    }
}
