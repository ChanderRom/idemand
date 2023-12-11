import { IdemandDeletedHotelsEvent } from '@app/idemand/hotel';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandDeletedHotelsEvent)
export class IdemandDeletedHotelsEventHandler implements IEventHandler<IdemandDeletedHotelsEvent>
{
    handle(event: IdemandDeletedHotelsEvent): void
    {
        // console.log('DeletedHotelsEvent: ', event);
    }
}
