/* eslint-disable key-spacing */
import { IdemandCreateHotelCommand } from '@app/idemand/hotel';
import { IdemandCreateHotelService } from '@app/idemand/hotel/application/create/idemand-create-hotel.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandCreateHotelCommand)
export class IdemandCreateHotelCommandHandler implements ICommandHandler<IdemandCreateHotelCommand>
{
    constructor(
        private readonly createHotelService: IdemandCreateHotelService,
    ) {}

    async execute(command: IdemandCreateHotelCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createHotelService.main(
            {
                id: new IdemandHotelId(command.payload.id),
                name: new IdemandHotelName(command.payload.name),
                totalRooms: new IdemandHotelTotalRooms(command.payload.totalRooms),
                bookedRooms: new IdemandHotelBookedRooms(command.payload.bookedRooms),
            },
            command.cQMetadata,
        );
    }
}
