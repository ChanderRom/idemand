export class IdemandDeletedRoomEvent
{
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
