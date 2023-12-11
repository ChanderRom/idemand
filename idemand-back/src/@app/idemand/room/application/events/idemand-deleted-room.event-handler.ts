import { IdemandDeletedRoomEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandDeletedRoomEvent)
export class IdemandDeletedRoomEventHandler implements IEventHandler<IdemandDeletedRoomEvent>
{
    handle(event: IdemandDeletedRoomEvent): void
    {
        // console.log('IdemandDeletedRoomEvent: ', event);
    }
}
