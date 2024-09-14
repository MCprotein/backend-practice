import { productSchema } from './product.schema'

export const SORT_FIELDS = Object.freeze({
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt'
})

export const SORT_TYPE = {
  ASC: 1,
  DESC: -1
}

export class ProductModel {
  constructor(connection) {
    this.model = connection.model('Product', productSchema)
  }

  async findOne(
    { id, name, description, price, tags, createdAt, updatedAt } = {},
    { sortKey = SORT_FIELDS.createdAt, sortValue } = {},
    { skip = 0, limit } = {}
  ) {
    const query = {}
    id && (query.id = id)
    name && (query.name = new RegExp(name, 'ig'))
    description && (query.description = new RegExp(description, 'ig'))
    price && (query.price = price)
    tags && (query.tags = { $in: tags })
    createdAt && (query.createdAt = createdAt)
    updatedAt && (query.updatedAt = updatedAt)

    return await this.model
      .findOne(query)
      .sort({ [sortKey]: sortValue })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec()
  }

  async createOne({ name, description, price, tags }) {
    return await this.model.create({ name, description, price, tags })
  }

  async updateOne(id, { name, description, price, tags }) {
    return await this.model
      .findByIdAndUpdate(
        id,
        {
          name,
          description,
          price,
          tags
        },
        {
          new: true
        }
      )
      .lean()
  }
}
