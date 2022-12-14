import BrandModel from '../models/brand.model.js'

class BrandController {
    constructor () {
        console.log('brandcontroller called')
    }

    list = async (req, res) => {
        const result = await BrandModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await BrandModel.findOne({
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
            const model = await BrandModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{name} = req.body
        if(name) {
            const model = await BrandModel.update(req.body, {
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
            await BrandModel.destroy({
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

export {BrandController}