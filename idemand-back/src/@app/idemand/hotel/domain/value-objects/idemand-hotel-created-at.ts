import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'IdemandHotelCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}