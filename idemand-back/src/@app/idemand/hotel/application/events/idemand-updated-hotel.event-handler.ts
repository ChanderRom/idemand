import { IdemandUpdatedHotelEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandUpdatedHotelEvent)
export class IdemandUpdatedHotelEventHandler implements IEventHandler<IdemandUpdatedHotelEvent>
{
    handle(event: IdemandUpdatedHotelEvent): void
    {
        // console.log('UpdatedHotelEvent: ', event);
    }
}
