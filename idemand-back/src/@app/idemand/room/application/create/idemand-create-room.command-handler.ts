/* eslint-disable key-spacing */
import { IdemandCreateRoomCommand } from '@app/idemand/room';
import { IdemandCreateRoomService } from '@app/idemand/room/application/create/idemand-create-room.service';
import {
    IdemandRoomId,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandCreateRoomCommand)
export class IdemandCreateRoomCommandHandler implements ICommandHandler<IdemandCreateRoomCommand>
{
    constructor(
        private readonly createRoomService: IdemandCreateRoomService,
    ) {}

    async execute(command: IdemandCreateRoomCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createRoomService.main(
            {
                id: new IdemandRoomId(command.payload.id),
                type: new IdemandRoomType(command.payload.type),
            },
            command.cQMetadata,
        );
    }
}
