import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelBookedRooms extends IntValueObject
{
    public readonly type: string = 'IdemandHotelBookedRooms';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelBookedRooms',
            nullable   : false,
            undefinable: false,
            maxLength  : 50,
            unsigned   : true,
        }, validationRules));
    }
}