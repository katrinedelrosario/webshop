import express from 'express'
import dotenv from 'dotenv' 

import {router as InitRouter} from './routes/init.router.js'
import {router as UserRouter} from './routes/user.router.js'
import {router as AuthenticateRouter} from './routes/authenticate.router.js'
import {router as ProductRouter} from './routes/product.router.js'
import {router as BrandRouter} from './routes/brand.router.js'
import {router as CategoryRouter} from './routes/category.router.js'
import {router as ColorRouter} from './routes/color.router.js'
import {router as SizeRouter} from './routes/size.router.js'
import {router as ImgRouter} from './routes/img.router.js'
import {router as ReviewRouter} from './routes/review.router.js'




dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))


app.use(InitRouter)
app.use(UserRouter)
app.use(AuthenticateRouter)
app.use(ProductRouter)
app.use(BrandRouter)
app.use(CategoryRouter)
app.use(ColorRouter)
app.use(SizeRouter)
app.use(ImgRouter)
app.use(ReviewRouter)


app.use(express.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


const port = (process.env.PORT || 4000)

app.listen(port, () => {
    console.log (`webserver running on http://localhost:${port}`);
})

// sendes frontpage if no /subpage is mentioned
app.get('/', (req, res) => {
    res.send('hiii world✨✨')
})
//subpages
app.get('/products', (req, res) => {
    res.send('our products 💸')
})
app.get('/about', (req, res) => {
    res.send('about us 👫🏽')
})
app.get('/contact', (req, res) => {
    res.send('contact us 📞')
})
app.use((req, res, next) => {
    res.status(404).send("Site was not found")
})