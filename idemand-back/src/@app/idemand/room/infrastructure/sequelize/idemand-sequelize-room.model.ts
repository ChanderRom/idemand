/* eslint-disable indent */
/* eslint-disable key-spacing */
import { DataTypes } from 'sequelize';
import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'IdemandRoom',
    freezeTableName: true,
    timestamps: false,
})
export class IdemandRoomModel extends Model<IdemandRoomModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'type',
        allowNull: false,
        type: DataTypes.STRING(undefined),
    })
    type: string;

    @Column({
        field: 'price',
        allowNull: false,
        type: DataTypes.STRING(undefined),
    })
    price: string;

    @Column({
        field: 'date',
        allowNull: false,
        type: DataTypes.DATE,
    })
    date: string;

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}
