/*
  Warnings:

  - You are about to drop the column `headshot` on the `Cast` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cast" DROP COLUMN "headshot",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT '';
