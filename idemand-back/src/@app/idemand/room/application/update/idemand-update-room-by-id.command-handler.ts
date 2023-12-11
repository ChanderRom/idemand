/* eslint-disable key-spacing */
import { IdemandUpdateRoomByIdCommand } from '@app/idemand/room';
import { IdemandUpdateRoomByIdService } from '@app/idemand/room/application/update/idemand-update-room-by-id.service';
import {
    IdemandRoomDate,
    IdemandRoomId,
    IdemandRoomPrice,
    IdemandRoomType,
} from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpdateRoomByIdCommand)
export class IdemandUpdateRoomByIdCommandHandler implements ICommandHandler<IdemandUpdateRoomByIdCommand>
{
    constructor(
        private readonly updateRoomByIdService: IdemandUpdateRoomByIdService,
    ) {}

    async execute(command: IdemandUpdateRoomByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateRoomByIdService.main(
            {
                id: new IdemandRoomId(command.payload.id),
                type: new IdemandRoomType(command.payload.type, { undefinable: true }),
                price: new IdemandRoomPrice(command.payload.price, { undefinable: true }),
                date: new IdemandRoomDate(command.payload.date, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
