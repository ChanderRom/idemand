import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelId extends UuidValueObject
{
    public readonly type: string = 'IdemandHotelId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}