/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Author` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "imageUrl",
ADD COLUMN     "image" BYTEA;
