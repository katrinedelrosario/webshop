import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class SizeModel extends Model {}

SizeModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    size_eu: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    size_us: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'size',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default SizeModel