import ColorModel from '../models/color.model.js'

class ColorController {
    constructor () {
        console.log('colorcontroller called')
    }

    list = async (req, res) => {
        const result = await ColorModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await ColorModel.findOne({
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
            const model = await ColorModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{name} = req.body
        if (name) {
            const model = await ColorModel.update(req.body, {
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
            await ColorModel.destroy({
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

export {ColorController}