export class ProductController {
  constructor(productService) {
    this.productService = productService
  }

  getProducts1 = async (req, res) => {
    const { orderBy, page, pageSize, keyword } = req.query

    const products = await this.productService.getProducts({
      orderBy,
      page: Number(page),
      pageSize: Number(pageSize),
      keyword
    })

    res.status(200).json(products)
  }

  async getProducts2(req, res) {
    const { orderBy, page, pageSize, keyword } = req.query

    const products = await this.productService.getProducts({
      orderBy,
      page: Number(page),
      pageSize: Number(pageSize),
      keyword
    })

    res.status(200).json(products)
  }
}
