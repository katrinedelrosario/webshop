import express from 'express'
import {ColorController} from '../controllers/color.controller.js'

const controller = new ColorController()
const router = express.Router()

router.get('/color', (req, res) => {
    controller.list(req, res)
})
router.get('/color/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})
router.post('/color', (req, res) => {
    controller.create(req, res)
})
router.put('/color/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
router.delete('/color/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {router}