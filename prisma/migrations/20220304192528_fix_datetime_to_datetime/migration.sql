/*
  Warnings:

  - You are about to drop the column `Datetime` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `datetime` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `Datetime`,
    ADD COLUMN `datetime` DATETIME(3) NOT NULL;
