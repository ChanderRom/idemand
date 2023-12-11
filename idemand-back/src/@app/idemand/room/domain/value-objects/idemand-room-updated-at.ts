import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandRoomUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}