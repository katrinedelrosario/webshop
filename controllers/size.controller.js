import SizeModel from '../models/size.model.js'

class SizeController {
    constructor () {
        console.log('sizecontroller called')
    }

    list = async (req, res) => {
        const result = await SizeModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await SizeModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {size_eu, size_us} = req.body
        if(size_eu && size_us) {
            const model = await SizeModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{size_eu, size_us} = req.body
        if (size_eu && size_us) {
            const model = await SizeModel.update(req.body, {
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
            await SizeModel.destroy({
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

export {SizeController}