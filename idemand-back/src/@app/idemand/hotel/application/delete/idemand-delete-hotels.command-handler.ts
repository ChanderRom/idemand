import { IdemandDeleteHotelsCommand } from '@app/idemand/hotel';
import { IdemandDeleteHotelsService } from '@app/idemand/hotel/application/delete/idemand-delete-hotels.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandDeleteHotelsCommand)
export class IdemandDeleteHotelsCommandHandler implements ICommandHandler<IdemandDeleteHotelsCommand>
{
    constructor(
        private readonly deleteHotelsService: IdemandDeleteHotelsService,
    ) {}

    async execute(command: IdemandDeleteHotelsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteHotelsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
