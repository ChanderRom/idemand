import { IdemandCreatedHotelEvent } from './idemand-created-hotel.event';

export class IdemandCreatedHotelsEvent
{
    constructor(
        public readonly hotels: IdemandCreatedHotelEvent[],
    ) {}
}
