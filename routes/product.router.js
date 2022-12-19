import express from 'express'
import {ProductController} from '../controllers/product.controller.js'

const controller = new ProductController()
const router = express.Router()

router.get('/product', (req, res) => {
    controller.list(req, res)
})
router.get('/product/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})
router.post('/product', (req, res) => {
    controller.create(req, res)
})
router.put('/product/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
router.delete('/product/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {router} 