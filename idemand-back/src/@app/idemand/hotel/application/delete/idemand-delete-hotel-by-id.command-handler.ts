import { IdemandDeleteHotelByIdCommand } from '@app/idemand/hotel';
import { IdemandDeleteHotelByIdService } from '@app/idemand/hotel/application/delete/idemand-delete-hotel-by-id.service';
import { IdemandHotelId } from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandDeleteHotelByIdCommand)
export class IdemandDeleteHotelByIdCommandHandler implements ICommandHandler<IdemandDeleteHotelByIdCommand>
{
    constructor(
        private readonly deleteHotelByIdService: IdemandDeleteHotelByIdService,
    ) {}

    async execute(command: IdemandDeleteHotelByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteHotelByIdService.main(
            new IdemandHotelId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
