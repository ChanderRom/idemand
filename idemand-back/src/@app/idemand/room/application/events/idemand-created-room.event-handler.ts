import { IdemandCreatedRoomEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandCreatedRoomEvent)
export class IdemandCreatedRoomEventHandler implements IEventHandler<IdemandCreatedRoomEvent>
{
    handle(event: IdemandCreatedRoomEvent): void
    {
        // console.log('IdemandCreatedRoomEvent: ', event);
    }
}
