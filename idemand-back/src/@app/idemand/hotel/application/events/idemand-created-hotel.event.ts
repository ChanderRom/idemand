export class IdemandCreatedHotelEvent
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly totalRooms: number,
        public readonly bookedRooms: number,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
