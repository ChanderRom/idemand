import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IdemandRoomId extends UuidValueObject
{
    public readonly type: string = 'IdemandRoomId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'IdemandRoomId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}