/* eslint-disable key-spacing */
import { IdemandUpdateRoomsCommand } from '@app/idemand/room';
import { IdemandUpdateRoomsService } from '@app/idemand/room/application/update/idemand-update-rooms.service';
import {
    IdemandRoomDate,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpdateRoomsCommand)
export class IdemandUpdateRoomsCommandHandler implements ICommandHandler<IdemandUpdateRoomsCommand>
{
    constructor(
        private readonly updateRoomsService: IdemandUpdateRoomsService,
    ) {}

    async execute(command: IdemandUpdateRoomsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateRoomsService.main(
            {
                id: new IdemandRoomId(command.payload.id, { undefinable: true }),
                type: new IdemandRoomType(command.payload.type, { undefinable: true }),
                price: new IdemandRoomPrice(command.payload.price, { undefinable: true }),
                date: new IdemandRoomDate(command.payload.date, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
