import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ImgModel extends Model {}

ImgModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'img',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default ImgModel