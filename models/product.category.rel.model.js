import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ProductCategoryRelModel extends Model {}

ProductCategoryRelModel.init({
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'productcategoryrel',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default ProductCategoryRelModel