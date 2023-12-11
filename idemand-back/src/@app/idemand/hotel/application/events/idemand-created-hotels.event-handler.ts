import { IdemandCreatedHotelsEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandCreatedHotelsEvent)
export class IdemandCreatedHotelsEventHandler implements IEventHandler<IdemandCreatedHotelsEvent>
{
    handle(event: IdemandCreatedHotelsEvent): void
    {
        // console.log('CreatedHotelsEvent: ', event);
    }
}
