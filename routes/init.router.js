import express from 'express'
import {sequelize} from '../config/db.js'

import ProductModel from '../models/product.model.js'
import BrandModel from '../models/brand.model.js'
import CategoryModel from '../models/category.model.js'
import ColorModel from '../models/color.model.js'
import ImgModel from '../models/img.model.js'
import SizeModel from '../models/size.model.js'
import ReviewModel from '../models/review.model.js'
import UserModel from '../models/user.model.js'


const router = express.Router()

router.get('/init', (req, res) => {
    try {
        sequelize.sync({
            alter: true
        })
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export {router}