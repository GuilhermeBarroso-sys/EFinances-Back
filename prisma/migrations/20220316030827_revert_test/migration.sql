-- DropIndex
DROP INDEX `users_access_control_user_id_fkey` ON `users_access_control`;

-- AddForeignKey
ALTER TABLE `users_access_control` ADD CONSTRAINT `users_access_control_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
