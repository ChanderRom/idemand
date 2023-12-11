import { IdemandDeleteRoomByIdCommand } from '@app/idemand/room';
import { IdemandDeleteRoomByIdService } from '@app/idemand/room/application/delete/idemand-delete-room-by-id.service';
import { IdemandRoomId } from '@app/idemand/room/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandDeleteRoomByIdCommand)
export class IdemandDeleteRoomByIdCommandHandler implements ICommandHandler<IdemandDeleteRoomByIdCommand>
{
    constructor(
        private readonly deleteRoomByIdService: IdemandDeleteRoomByIdService,
    ) {}

    async execute(command: IdemandDeleteRoomByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteRoomByIdService.main(
            new IdemandRoomId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
