import ReviewModel from '../models/review.model.js'

class ReviewController {
    constructor() {
        console.log('reviewcontroller called')
    }

    list = async (req, res) => {
        const result = await ReviewModel.findAll()
        res.json(result)
    }
    
    get = async (req, res) => {
        const result = await ReviewModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(result)
    }
    
    create = async (req, res) => {
        console.log(req.body)
        const {firstname, lastname, email, password} = req.body
        if(firstname && lastname && email && password) {
            const model = await ReviewModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }
    
    update = async (req, res) => {
        const {firstname, lastname, email, password} = req.body
        if(firstname && lastname && email && password) {
            const model = await ReviewModel.update(req.body, {
                where: {
                    id: req.params.id
                },
                individualHooks: true
            })
            return res.json({status: true})
        } else {
            res.send(418)
        }
    }
    
    delete = async (req, res) => {
        try {
            await ReviewModel.destroy({
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

export {ReviewController}

