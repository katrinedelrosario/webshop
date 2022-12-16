import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ProductModel extends Model {}

ProductModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    size_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_num: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'product',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    underscored: true
})

export default ProductModel