import express from 'express'
import {sequelize} from '../config/db.js'


const router = express.Router()

router.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export {router}