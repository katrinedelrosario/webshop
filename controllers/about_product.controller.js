import About_ProductModel from '../models/about_product.model.js'

class About_ProductController {
    constructor () {
        console.log('about_productcontroller called')
    }

    list = async (req, res) => {
        const result = await About_ProductModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await About_ProductModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {body} = req.body
        if(body) {
            const model = await About_ProductModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{body} = req.body
        if (body) {
            const model = await About_ProductModel.update(req.body, {
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
            await About_ProductModel.destroy({
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

export {About_ProductController}