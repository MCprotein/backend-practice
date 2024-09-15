import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import Product from './models/Product.js'

import { productController } from './container.js'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.listen(process.env.PORT || 3000, () => console.log('Server Started'))




// const MESSAGES = Object.freeze({
//   NOID: 'Cannot find given id.',
//   IDFORMAT: 'Invalid id format.'
// });

// // handler를 인자로 받아서 오류처리 해주는 함수
// function asyncHandler(handler) {
//   return async (req, res) => {
//     try {
//       await handler(req, res);
//     } catch (e) {
//       if (e.name === 'ValidationError') {
//         res.status(400).send({ message: e.message });
//       } else if (e.name === 'CastError') {
//         res.status(404).send({ message: MESSAGES.IDFORMAT });
//       } else {
//         res.status(500).send({ message: e.message });
//       }
//     }
//   };
// }

// // get API
// controller
app.get('/products', asyncHandler(productController.getProducts1))
app.get(
  '/products',
  asyncHandler(productController.getProducts2.bind(productController))
)

// // get :id API
// app.get(
//   '/products/:id',
//   asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const product = await Product.findById(id);

//     if (product) res.send(product);
//     else res.status(404).send({ message: MESSAGES.NOID });
//   })
// );

// // post API
// app.post(
//   '/products',
//   asyncHandler(async (req, res) => {
//     const newProduct = await Product.create(req.body);

//     res.status(201).send(newProduct);
//   })
// );

// // patch API
// app.patch(
//   '/products/:id',
//   asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const product = await Product.findById(id);
//     if (product) {
//       Object.keys(req.body).forEach((k) => {
//         product[k] = req.body[k];
//       });
//       await product.save();
//       res.send(product);
//     } else res.status(404).send({ message: MESSAGES.NOID });
//   })
// );

// // delete API
app.delete(
  '/products/:id',
  asyncHandler(async (req, res) => {

    분업
    각 클래스와 함수마다 특정 역할을 부여해서 그것만 하도록 설계

    // controller
    // request, response 객체를 직접적으로 사용하는 역할
    // 비즈니스 로직 모르고, db 접근 안함
    const id = req.params.id

    // repository(model)
    // db 접근만 하는 역할
    // http 통신이나 비즈니스 로직은 몰라요
    const product = await Product.findByIdAndDelete(id)


    // service
    // 실제로 어떤 동작을 하는 역할 (비즈니스 로직)
    // http 통신이나 db 접근은 안함
    if (!product) {
      어떤 행동
    }

    if (product) {
      res.sendStatus(204)
    } else res.status(404).send({ message: MESSAGES.NOID })
  })
)
