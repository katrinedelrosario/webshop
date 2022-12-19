import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class BrandModel extends Model {}


BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
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
    underscored: true,
    createdAt: false,
    updatedAt: false
})

export default BrandModel