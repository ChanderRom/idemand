import { IdemandUpdatedHotelEvent } from './idemand-updated-hotel.event';

export class IdemandUpdatedHotelsEvent
{
    constructor(
        public readonly hotels: IdemandUpdatedHotelEvent[],
    ) {}
}
