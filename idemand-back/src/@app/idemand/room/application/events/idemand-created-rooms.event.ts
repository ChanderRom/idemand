import { IdemandCreatedRoomEvent } from './idemand-created-room.event';

export class IdemandCreatedRoomsEvent
{
    constructor(
        public readonly rooms: IdemandCreatedRoomEvent[],
    ) {}
}
