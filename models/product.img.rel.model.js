import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ProductImgRelModel extends Model {}

ProductImgRelModel.init({
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    img_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sort_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'productimgrel',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

export default ProductImgRelModel