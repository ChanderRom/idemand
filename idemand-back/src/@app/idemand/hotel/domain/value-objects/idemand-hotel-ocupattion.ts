import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelOcupattion extends StringValueObject
{
    public readonly type: string = 'IdemandHotelOcupattion';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelOcupattion',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}