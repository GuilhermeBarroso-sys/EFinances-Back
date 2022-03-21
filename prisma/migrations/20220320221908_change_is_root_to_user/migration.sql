/*
  Warnings:

  - You are about to drop the column `isRoot` on the `users_access_control` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `isRoot` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users_access_control` DROP COLUMN `isRoot`;
