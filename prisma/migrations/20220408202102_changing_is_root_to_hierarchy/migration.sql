/*
  Warnings:

  - You are about to drop the column `isRoot` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `isRoot`,
    ADD COLUMN `hierarchy` VARCHAR(191) NULL DEFAULT 'user';
