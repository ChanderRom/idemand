import { IdemandCreatedHotelEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandCreatedHotelEvent)
export class IdemandCreatedHotelEventHandler implements IEventHandler<IdemandCreatedHotelEvent>
{
    handle(event: IdemandCreatedHotelEvent): void
    {
        // console.log('IdemandCreatedHotelEvent: ', event);
    }
}
