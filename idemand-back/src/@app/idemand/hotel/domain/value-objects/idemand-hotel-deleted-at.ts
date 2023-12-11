import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandHotelDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}