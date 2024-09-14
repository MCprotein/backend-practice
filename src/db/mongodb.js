import * as mongoose from 'mongoose'
import { mongodbConnectionConfig } from '../config/mongodb.config.js'

const { host, username, password, port } = mongodbConnectionConfig

const mongodbUri = `mongodb://${username}:${password}@${host}:${port}`

export const mongodbConnection = mongoose.createConnection(mongodbUri)

mongodbConnection.on('connected', () => console.log('mongodb connected'))
mongodbConnection.on('disconnected', () => console.log('disconnected'))
mongodbConnection.on('reconnected', () => console.log('reconnected'))
mongodbConnection.on('disconnecting', () => console.log('disconnecting'))
mongodbConnection.on('close', () => console.log('close'))
