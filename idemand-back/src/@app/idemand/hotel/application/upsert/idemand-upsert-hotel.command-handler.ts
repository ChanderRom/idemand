/* eslint-disable key-spacing */
import { IdemandUpsertHotelCommand } from '@app/idemand/hotel';
import { IdemandUpsertHotelService } from '@app/idemand/hotel/application/upsert/idemand-upsert-hotel.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandUpsertHotelCommand)
export class IdemandUpsertHotelCommandHandler implements ICommandHandler<IdemandUpsertHotelCommand>
{
    constructor(
        private readonly upsertHotelService: IdemandUpsertHotelService,
    ) {}

    async execute(command: IdemandUpsertHotelCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertHotelService.main(
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
