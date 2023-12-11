/* eslint-disable key-spacing */
import { IdemandCreateRoomsCommand } from '@app/idemand/room';
import { IdemandCreateRoomsService } from '@app/idemand/room/application/create/idemand-create-rooms.service';
import {
    IdemandRoomId,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandCreateRoomsCommand)
export class IdemandCreateRoomsCommandHandler implements ICommandHandler<IdemandCreateRoomsCommand>
{
    constructor(
        private readonly createRoomsService: IdemandCreateRoomsService,
    ) {}

    async execute(command: IdemandCreateRoomsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createRoomsService.main(
            command.payload
                .map(room =>
                {
                    return {
                        id: new IdemandRoomId(room.id),
                        type: new IdemandRoomType(room.type),
                    };
                }),
            command.cQMetadata,
        );
    }
}
