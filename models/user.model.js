import {sequelize} from '../config/db.js'
import {DataTypes, Model} from 'sequelize'
import bcrypt from 'bcrypt'

class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    underscored: true,
    created_at: true,
    updated_at: true,
    hooks: {
        beforeCreate: async (user, options) => {
            user.password = await createHash(user.password)
        },
        beforeUpdate: async (user, options) => {
            user.password = await createHash(user.password)
        }
    }
})

const createHash = async string => {
    const salt = await bcrypt.genSalt(10)
    const hashedString = await bcrypt.hash(string, salt)
    return hashedString
}

export default UserModel