import { Schema } from 'mongoose'

export const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 10
    },
    description: {
      type: String,
      minLength: 10,
      maxLength: 100,
      required: true
    },
    price: { type: Number, required: true, min: 0 },
    tags: { type: [String] },
    images: { type: [String] },
    favoriteCount: { type: Number, default: 0, min: 0 }
  },
  {
    timestamps: true,
    collection: 'products'
  }
)
