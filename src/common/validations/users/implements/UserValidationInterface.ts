import { User } from "@prisma/client";
export interface EmailResponseObject {
	alreadyExists: boolean;
	user?: User;
}
export interface UserValidationInterface {
	emailExists(email: string) : Promise<EmailResponseObject>
	correctPassword(password: string, hashedPassword : string) : Promise<boolean>
}