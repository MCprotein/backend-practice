import mongoose from 'mongoose'
import { mongodbConnection } from '../configs/mongodb.config'

const { host, port, database, username, password } = mongodbConnection
const mongooseUri = `mongodb://${username}:${password}@${host}:${port}/${database}`
export const connection = mongoose.createConnection(mongooseUri)

connection.on('connected', () => console.log('connected'))
connection.on('open', () => console.log('open'))
connection.on('disconnected', () => console.log('disconnected'))
connection.on('reconnected', () => console.log('reconnected'))
connection.on('disconnecting', () => console.log('disconnecting'))
connection.on('close', () => console.log('close'))
