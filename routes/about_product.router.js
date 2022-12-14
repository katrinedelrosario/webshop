import express from 'express'
import {About_ProductController} from '../controllers/about_product.controller.js'

const controller = new About_ProductController()
const router = express.Router()

router.get('/about_product/', (req, res) => {controller.list(req, res)})
router.get('/about_product/:id([0-9]*)', (req, res) => {controller.get(req, res)})
router.post('/about_product', (req, res) => {controller.create(req, res)})
router.put('/about_product/:id([0-9]*)', (req, res) => {controller.update(req, res)})
router.delete('/about_product/:id([0-9]*)', (req, res) => {controller.delete(req, res)})

export {router}