/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderBook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderBook" DROP CONSTRAINT "OrderBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "OrderBook" DROP CONSTRAINT "OrderBook_orderId_fkey";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderBook";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Autor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isAuthorOfTheMonth" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);
