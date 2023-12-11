
export class IdemandRoomResponse
{
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly price: string,
        public readonly date: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
