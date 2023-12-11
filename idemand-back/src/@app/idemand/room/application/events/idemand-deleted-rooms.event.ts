import { IdemandDeletedRoomEvent } from './idemand-deleted-room.event';

export class IdemandDeletedRoomsEvent
{
    constructor(
        public readonly rooms: IdemandDeletedRoomEvent[],
    ) {}
}
