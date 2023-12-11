export interface IdemandHotel {
    id: string;
    totalRooms: string;
    bookedRooms: string;
    ocupattion: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface IdemandCreateHotel {
    id: string;
    totalRooms: string;
    bookedRooms: string;
    ocupattion: string;
}

export interface IdemandUpdateHotelById {
    id: string;
    totalRooms?: string;
    bookedRooms?: string;
    ocupattion?: string;
}

export interface IdemandUpdateHotels {
    id?: string;
    totalRooms?: string;
    bookedRooms?: string;
    ocupattion?: string;
}

export interface IdemandRoom {
    id: string;
    type: string;
    price: string;
    date: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface IdemandCreateRoom {
    id: string;
    type: string;
    price: string;
    date: string;
}

export interface IdemandUpdateRoomById {
    id: string;
    type?: string;
    price?: string;
    date?: string;
}

export interface IdemandUpdateRooms {
    id?: string;
    type?: string;
    price?: string;
    date?: string;
}
