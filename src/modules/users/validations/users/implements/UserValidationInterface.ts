import { User } from "@prisma/client";
export interface EmailResponseObject {
	alreadyExists: boolean;
	user?: User;
}
export interface UserValidationInterface {
	userExists(id: string) : Promise<boolean>
	emailExists(email: string) : Promise<EmailResponseObject>
	correctPassword(password: string, hashedPassword : string) : Promise<boolean>
}