import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandHotelTotalRooms extends IntValueObject
{
    public readonly type: string = 'IdemandHotelTotalRooms';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandHotelTotalRooms',
            nullable   : false,
            undefinable: false,
            maxLength  : 50,
            unsigned   : true,
        }, validationRules));
    }
}