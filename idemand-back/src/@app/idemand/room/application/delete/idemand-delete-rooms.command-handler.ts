import { IdemandDeleteRoomsCommand } from '@app/idemand/room';
import { IdemandDeleteRoomsService } from '@app/idemand/room/application/delete/idemand-delete-rooms.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandDeleteRoomsCommand)
export class IdemandDeleteRoomsCommandHandler implements ICommandHandler<IdemandDeleteRoomsCommand>
{
    constructor(
        private readonly deleteRoomsService: IdemandDeleteRoomsService,
    ) {}

    async execute(command: IdemandDeleteRoomsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteRoomsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
