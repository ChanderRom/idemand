import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandRoomDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}