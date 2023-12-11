import { IdemandDeletedHotelEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandDeletedHotelEvent)
export class IdemandDeletedHotelEventHandler implements IEventHandler<IdemandDeletedHotelEvent>
{
    handle(event: IdemandDeletedHotelEvent): void
    {
        // console.log('IdemandDeletedHotelEvent: ', event);
    }
}
