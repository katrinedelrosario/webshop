import express from 'express'
import {SizeController} from '../controllers/size.controller.js'

const controller = new SizeController()
const router = express.Router()

router.get('/size', (req, res) => {controller.list(req, res)})
router.get('/size/:id([0-9]*)', (req, res) => {controller.get(req, res)})
router.post('/size', (req, res) => {controller.create(req, res)})
router.put('/size/:id([0-9]*)', (req, res) => {controller.update(req, res)})
router.delete('/size/:id([0-9]*)', (req, res) => {controller.delete(req, res)})

export {router}