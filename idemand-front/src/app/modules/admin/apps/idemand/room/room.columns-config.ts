import { ColumnConfig, ColumnDataType } from '@aurora';

export const roomColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'type',
        sort       : 'type',
        translation: 'idemand.Type',
    },
];