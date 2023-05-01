import ImgModel from '../models/img.model.js'

class ImgController {
    constructor () {
        console.log('imgcontroller called')
    }

    list = async (req, res) => {
        const result = await ImgModel.findAll()
        res.json(result)
    }

    get = async (req, res) => {
        const result = await ImgModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {url} = req.body
        if(url) {
            const model = await ImgModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.sendStatus(418)
        }
    }
    
    update = async (req, res) => {
        console.log(req.body)
        const{url} = req.body
        if (url) {
            const model = await ImgModel.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            return res.json({status: true})
        } else {
            res.sendStatus(418)
        }
    }

    delete = async (req, res) => {
        try {
            await ImgModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.sendStatus(200)
        } 
        catch(err) {
            res.sendStatus(err)
        }
    }

}

export {ImgController}