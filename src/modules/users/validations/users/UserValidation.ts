import { prisma } from "../../../../database/prisma";
import { UserValidationInterface, EmailResponseObject } from "./implements/UserValidationInterface";
import bcrypt from 'bcrypt';
class UserValidation implements UserValidationInterface{
	isValidEmail(email: string) {
		const emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
		return emailFormat.test(email) ? true : false ;
	}
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

	async userExists(id: string) {
		const user = await prisma.user.findUnique({
			where: {
				id
			},
			select: {
				id: true
			}
		});
		return user ? true : false;
	}
}

export {UserValidation};
	

