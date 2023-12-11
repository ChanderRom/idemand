import { IdemandCreatedRoomsEvent } from '@app/idemand/room';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IdemandCreatedRoomsEvent)
export class IdemandCreatedRoomsEventHandler implements IEventHandler<IdemandCreatedRoomsEvent>
{
    handle(event: IdemandCreatedRoomsEvent): void
    {
        // console.log('CreatedRoomsEvent: ', event);
    }
}
