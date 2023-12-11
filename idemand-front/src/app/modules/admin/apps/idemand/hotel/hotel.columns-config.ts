import { ColumnConfig, ColumnDataType } from '@aurora';

export const hotelColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'name',
        sort       : 'name',
        translation: 'idemand.Name',
    },
    {
        type       : ColumnDataType.NUMBER,
        field      : 'totalRooms',
        sort       : 'totalRooms',
        translation: 'idemand.TotalRooms',
    },
    {
        type       : ColumnDataType.NUMBER,
        field      : 'bookedRooms',
        sort       : 'bookedRooms',
        translation: 'idemand.BookedRooms',
    },
];