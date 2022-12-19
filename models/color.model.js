import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ColorModel extends Model {}

ColorModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'color',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false
})

export default ColorModel