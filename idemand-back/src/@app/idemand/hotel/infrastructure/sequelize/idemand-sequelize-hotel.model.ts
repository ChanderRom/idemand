/* eslint-disable indent */
/* eslint-disable key-spacing */
import { DataTypes } from 'sequelize';
import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'IdemandHotel',
    freezeTableName: true,
    timestamps: false,
})
export class IdemandHotelModel extends Model<IdemandHotelModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(50),
    })
    name: string;

    @Column({
        field: 'totalRooms',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    totalRooms: number;

    @Column({
        field: 'bookedRooms',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    bookedRooms: number;

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
