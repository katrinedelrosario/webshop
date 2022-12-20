import ProductModel from '../models/product.model.js'
import BrandModel from '../models/brand.model.js'
import ColorModel from '../models/color.model.js'
import SizeModel from '../models/size.model.js'


BrandModel.hasOne(ProductModel, {
    foreignKey: 'brand_id'
}) 

ColorModel.hasMany(ProductModel, {
    foreignKey: 'color_id'
})

SizeModel.hasMany(ProductModel, {
    foreignKey: 'size_id'
})

// // ProductModel.hasMany(ColorModel, {
// //     foreignKeyConstraint: 'color_id'
// // })

// // ProductModel.hasMany(SizeModel, {
// //     foreignKey: 'size_id'
// // })

class ProductController {
    constructor () {
        console.log('productcontroller called')
    }

    list = async (req, res) => {
        const result = await ProductModel.findAll({
            attributes: ['id', 'model', 'price'],
            //order: ['id'],
            include: {
                model: BrandModel,
                attributes: ['id'],
                model: ColorModel,
                attributes: ['id'],
                model: SizeModel,
                attributes: ['size_eu']
            }
        })
        res.json(result)
    }

    get = async (req, res) => {
        const result = await ProductModel.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: BrandModel,
                attributes: ['id', 'name'],
                model: ColorModel,
                attributes: ['id', 'name'],
                model: SizeModel,
                attributes: ['id', 'size_eu', 'size_us', 'size_uk']
            }
        })
        res.json(result)
    }
    
     create = async (req, res) => {
         console.log(req.body)
         const {model, brand_id, price, size_id, color_id} = req.body
         if(model && brand_id && price && size_id && color_id) {
             const model = await ProductModel.create(req.body)
             return res.json({newid: model.id})
         } else {
             res.send(418)
         }
     }
    
    update = async (req, res) => {
        console.log(req.body)
        const{name} = req.body
        if (name) {
            const model = await ProductModel.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            return res.json({status: true})
        } else {
            res.send(418)
        }
    }

    delete = async (req, res) => {
        try {
            await ProductModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.sendStatus(200)
        } 
        catch(err) {
            res.send(err)
        }
    }

}

export {ProductController}