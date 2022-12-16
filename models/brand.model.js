import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class BrandModel extends Model {}

BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'brand',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default BrandModel