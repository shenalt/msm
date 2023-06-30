/*
  Warnings:

  - Made the column `order` on table `Show` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Show" ALTER COLUMN "order" SET NOT NULL;
