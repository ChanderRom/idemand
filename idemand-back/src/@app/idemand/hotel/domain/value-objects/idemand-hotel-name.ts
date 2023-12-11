import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelName extends StringValueObject
{
    public readonly type: string = 'IdemandHotelName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelName',
            nullable   : false,
            undefinable: false,
            maxLength  : 50,
        }, validationRules));
    }
}