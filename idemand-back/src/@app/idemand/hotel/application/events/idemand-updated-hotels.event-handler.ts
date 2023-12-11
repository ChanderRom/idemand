import { IdemandUpdatedHotelsEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandUpdatedHotelsEvent)
export class IdemandUpdatedHotelsEventHandler implements IEventHandler<IdemandUpdatedHotelsEvent>
{
    handle(event: IdemandUpdatedHotelsEvent): void
    {
        // console.log('IdemandUpdatedHotelsEvent: ', event);
    }
}
