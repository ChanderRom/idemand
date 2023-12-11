import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandRoomCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}