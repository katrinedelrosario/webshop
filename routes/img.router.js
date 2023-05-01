import express from 'express'
import {ImgController} from '../controllers/img.controller.js'

const controller = new ImgController()
const router = express.Router()

router.get('/img', (req, res) => {
    controller.list(req, res)
})
router.get('/img/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})
router.post('/img', (req, res) => {
    controller.create(req, res)
})
router.put('/img/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
router.delete('/img/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {router}