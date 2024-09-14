import express from 'express'
import cors from 'cors'
import { ProductModel } from './models/product.model.js'
import { mongodbConnection } from './db/mongodb.js'
import { ProductService } from './services/product.service.js'
import { ProductController } from './controllers/product.controller.js'

const app = express()
app.use(cors())
app.use(express.json())

const productModel = new ProductModel(mongodbConnection)
const productService = new ProductService(productModel)
const productController = new ProductController(productService)

app.use('/products', productController.getProducts.bind(productController))

app.listen(process.env.PORT || 3000, () => console.log('Server Started'))
