import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandHotelUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}