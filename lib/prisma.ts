import { PrismaClient } from "@prisma/client";

// PrismaClient is atteched to the `global` object in development to prevent
// exhausting the database connection limit.
//
//Lear more:
//https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
