/*
  Warnings:

  - You are about to drop the column `account_type` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `account_type`,
    ADD COLUMN `physical_person` BOOLEAN NOT NULL DEFAULT true;
