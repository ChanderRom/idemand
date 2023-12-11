import { IdemandDeletedRoomsEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandDeletedRoomsEvent)
export class IdemandDeletedRoomsEventHandler implements IEventHandler<IdemandDeletedRoomsEvent>
{
    handle(event: IdemandDeletedRoomsEvent): void
    {
        // console.log('DeletedRoomsEvent: ', event);
    }
}
