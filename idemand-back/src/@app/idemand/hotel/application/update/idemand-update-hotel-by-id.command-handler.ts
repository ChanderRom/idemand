/* eslint-disable key-spacing */
import { IdemandUpdateHotelByIdCommand } from '@app/idemand/hotel';
import { IdemandUpdateHotelByIdService } from '@app/idemand/hotel/application/update/idemand-update-hotel-by-id.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpdateHotelByIdCommand)
export class IdemandUpdateHotelByIdCommandHandler implements ICommandHandler<IdemandUpdateHotelByIdCommand>
{
    constructor(
        private readonly updateHotelByIdService: IdemandUpdateHotelByIdService,
    ) {}

    async execute(command: IdemandUpdateHotelByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateHotelByIdService.main(
            {
                id: new IdemandHotelId(command.payload.id),
                name: new IdemandHotelName(command.payload.name, { undefinable: true }),
                totalRooms: new IdemandHotelTotalRooms(command.payload.totalRooms, { undefinable: true }),
                bookedRooms: new IdemandHotelBookedRooms(command.payload.bookedRooms, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
