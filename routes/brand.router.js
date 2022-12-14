import express from 'express'
import {BrandController} from '../controllers/brand.controller.js'

const controller = new BrandController()
const router = express.Router()

router.get('/brand', (req, res) => {controller.list(req, res)})
router.get('/brand/:id([0-9]*)', (req, res) => {controller.get(req, res)})
router.post('/brand', (req, res) => {controller.create(req, res)})
router.put('/brand/:id([0-9]*)', (req, res) => {controller.update(req, res)})
router.delete('/brand/:id([0-9]*)', (req, res) => {controller.delete(req, res)})

export {router}