export class ProductController {
  constructor(productService) {
    this.productService = productService
  }

  async getProducts(req, res, next) {
    const { name, description, price, tags, sortKey, sortValue, skip, limit } =
      req.query

    const dto = {
      name,
      description,
      price,
      tags,
      sortKey,
      sortValues,
      skip,
      limit
    }

    const products = await this.productService.getProducts(dto)
    res.json({ list: products, totalCount: products.length })
  }
}
