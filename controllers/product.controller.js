import ProductModel from '../models/product.model.js'

class ProductController {
    constructor () {
        console.log('productcontroller called')
    }

    list = async (req, res) => {
        const result = await ProductModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await ProductModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {model, brand_id, price, size_id, color_id, stock_num} = req.body
        if(model && brand_id && price && size_id && color_id && stock_num) {
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