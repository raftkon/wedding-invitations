import {PrismaClient} from "@prisma/client"

// const globalForPrisma = global as unknown as { 
//     prisma: PrismaClient
// }
// e

declare global {
    var prisma: PrismaClient | undefined //eslint-disable-line no-var
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
