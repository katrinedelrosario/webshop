import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'

class ReviewModel extends Model {}

ReviewModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    num_stars: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    headline: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'review',
    freezeTableName: true,
    createdAt: true,
    updatedAt: false
})

export default ReviewModel