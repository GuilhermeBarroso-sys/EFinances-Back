import { prisma } from "../../../database/prisma";
import { UserValidationInterface, EmailResponseObject } from "./implements/UserValidationInterface";
import bcrypt from 'bcrypt';
class UserValidation implements UserValidationInterface{
	async emailExists(email: string, includeUser = false) {
		const user = await prisma.user.findFirst({
			where: {
				email
			}
		});
		const alreadyExists = user ? true : false;
		const response : EmailResponseObject = includeUser ? {alreadyExists, user} : {alreadyExists,user: null};
		return  response;  
	}

	async correctPassword(password: string, hashedPassword : string) {
		return await bcrypt.compare(password, hashedPassword);
	}
}

export {UserValidation};
	

