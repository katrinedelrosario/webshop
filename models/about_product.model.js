import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class AboutModel extends Model {}

AboutModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'about',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default AboutModel