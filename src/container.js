import { mongodbConnection } from './mongodb-connection.js'
import { ProductModel } from './models/product.model'
import { ProductService } from './services/product.service.js'
import { ProductController } from './controllers/product.controller.js'

// DI (Dependency Injection) 의존성 주입
// 자바 스프링은 빈 이라는 컨테이너가 있음 -> 이 빈에서 아래처럼 조립을 해줌 (프레임워크가 해주는 일)
const productModel = new ProductModel(mongodbConnection)
const productService = new ProductService(productModel)
export const productController = new ProductController(productService)
