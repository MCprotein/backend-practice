import pg from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = process.env.POSTGRESQL_DATABASE_URL

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const prisma = new PrismaClient({ adapter })
