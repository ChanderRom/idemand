/* eslint-disable key-spacing */
import { IdemandCreateHotelsCommand } from '@app/idemand/hotel';
import { IdemandCreateHotelsService } from '@app/idemand/hotel/application/create/idemand-create-hotels.service';
import {
    IdemandHotelBookedRooms,
    IdemandHotelId,
    IdemandHotelName,
    IdemandHotelTotalRooms,
} from '@app/idemand/hotel/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(IdemandCreateHotelsCommand)
export class IdemandCreateHotelsCommandHandler implements ICommandHandler<IdemandCreateHotelsCommand>
{
    constructor(
        private readonly createHotelsService: IdemandCreateHotelsService,
    ) {}

    async execute(command: IdemandCreateHotelsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createHotelsService.main(
            command.payload
                .map(hotel =>
                {
                    return {
                        id: new IdemandHotelId(hotel.id),
                        name: new IdemandHotelName(hotel.name),
                        totalRooms: new IdemandHotelTotalRooms(hotel.totalRooms),
                        bookedRooms: new IdemandHotelBookedRooms(hotel.bookedRooms),
                    };
                }),
            command.cQMetadata,
        );
    }
}
