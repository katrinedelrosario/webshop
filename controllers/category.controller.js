import CategoryModel from '../models/category.model.js'

class CategoryController {
    constructor () {
        console.log('categorycontroller called')
    }

    list = async (req, res) => {
        const result = await CategoryModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await CategoryModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {name} = req.body
        if(name) {
            const model = await CategoryModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{name} = req.body
        if (name) {
            const model = await CategoryModel.update(req.body, {
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
            await CategoryModel.destroy({
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

export {CategoryController}