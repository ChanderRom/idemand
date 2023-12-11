import { IdemandUpdatedRoomsEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandUpdatedRoomsEvent)
export class IdemandUpdatedRoomsEventHandler implements IEventHandler<IdemandUpdatedRoomsEvent>
{
    handle(event: IdemandUpdatedRoomsEvent): void
    {
        // console.log('IdemandUpdatedRoomsEvent: ', event);
    }
}
