/*
  Warnings:

  - You are about to drop the column `isRoot` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `isRoot`;

-- AlterTable
ALTER TABLE `users_access_control` ADD COLUMN `isRoot` BOOLEAN NULL DEFAULT false;
