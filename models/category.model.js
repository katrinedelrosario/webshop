import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class CategoryModel extends Model {}

CategoryModel.init({
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
    modelName: 'category',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false
})

export default CategoryModel