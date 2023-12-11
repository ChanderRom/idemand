import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomType extends StringValueObject
{
    public readonly type: string = 'IdemandRoomType';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomType',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}