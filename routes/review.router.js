import express from 'express'
import {ReviewController} from '../controllers/review.controller.js'

const controller = new ReviewController()
const router = express.Router()

router.get('/review', (req, res) => {
    controller.list(req, res)
})
router.get('/review/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})
router.post('/review', (req, res) => {
    controller.create(req, res)
})
router.put('/review/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
router.delete('/review/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {router}