import { IdemandUpdatedRoomEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandUpdatedRoomEvent)
export class IdemandUpdatedRoomEventHandler implements IEventHandler<IdemandUpdatedRoomEvent>
{
    handle(event: IdemandUpdatedRoomEvent): void
    {
        // console.log('UpdatedRoomEvent: ', event);
    }
}
