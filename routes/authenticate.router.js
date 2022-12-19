import express from 'express'
import {AuthenticateController} from '../controllers/authenticate.controller.js'
import verifyToken from '../middleware/verifytoken.js'

const controller = new AuthenticateController()
const router = express.Router()

router.post('/login', (req, res) => {
    controller.login(req, res)
})
router.get('/protected', verifyToken, (req, res) => {
    controller.protected(req, res)
})

export {router}