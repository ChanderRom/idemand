import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomPrice extends StringValueObject
{
    public readonly type: string = 'IdemandRoomPrice';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomPrice',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}