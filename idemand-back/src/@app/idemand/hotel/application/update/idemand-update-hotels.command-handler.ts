/* eslint-disable key-spacing */
import { IdemandUpdateHotelsCommand } from '@app/idemand/hotel';
import { IdemandUpdateHotelsService } from '@app/idemand/hotel/application/update/idemand-update-hotels.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpdateHotelsCommand)
export class IdemandUpdateHotelsCommandHandler implements ICommandHandler<IdemandUpdateHotelsCommand>
{
    constructor(
        private readonly updateHotelsService: IdemandUpdateHotelsService,
    ) {}

    async execute(command: IdemandUpdateHotelsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateHotelsService.main(
            {
                id: new IdemandHotelId(command.payload.id, { undefinable: true }),
                name: new IdemandHotelName(command.payload.name, { undefinable: true }),
                totalRooms: new IdemandHotelTotalRooms(command.payload.totalRooms, { undefinable: true }),
                bookedRooms: new IdemandHotelBookedRooms(command.payload.bookedRooms, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
