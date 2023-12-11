import { IdemandDeletedHotelEvent } from './idemand-deleted-hotel.event';

export class IdemandDeletedHotelsEvent
{
    constructor(
        public readonly hotels: IdemandDeletedHotelEvent[],
    ) {}
}
