import { IdemandUpdatedRoomEvent } from './idemand-updated-room.event';

export class IdemandUpdatedRoomsEvent
{
    constructor(
        public readonly rooms: IdemandUpdatedRoomEvent[],
    ) {}
}
