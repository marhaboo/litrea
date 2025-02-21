/*
  Warnings:

  - You are about to drop the `Autor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Autor";

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isAuthorOfTheMonth" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);
