import UserModel from '../models/user.model.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()

class AuthenticateController {
    constructor() {
        console.log('running authentication')
    }


    login = async (req, res) => {
        const {username, password} = req.body
        if(username && password) {
            const data = await UserModel.findOne({
                attributes: ['id', 'password'],
                where: {
                    email: username
                }
            })
            bcrypt.compare(password, data.password, (err, result) => {
                if(result) {
                    const token = jwt.sign(data.id, process.env.PRIVATE_KEY)
                    res.json({
                        accessToken: token
                    })
                } else {
                    res.sendStatus(401)
                }
            })
        } else {
            res.sendStatus(403)
        }
    }

    protected = async (req, res) => {
        res.sendStatus(200)
    }
}

export {AuthenticateController}