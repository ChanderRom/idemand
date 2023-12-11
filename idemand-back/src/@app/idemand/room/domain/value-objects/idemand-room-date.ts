import { DataValueObject, DateValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomDate extends DateValueObject
{
    public readonly type: string = 'IdemandRoomDate';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomDate',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}