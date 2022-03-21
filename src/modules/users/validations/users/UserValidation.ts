import { prisma } from "../../../../database/prisma";
import { UserValidationInterface, EmailResponseObject } from "./implements/UserValidationInterface";
import bcrypt from 'bcrypt';
class UserValidation implements UserValidationInterface{
	isValidEmail(email: string) {
		const emailFormat = email.split('@');
		return emailFormat.length > 1 ? true : false ;
	}
	async emailExists(email: string, includeUser = false) {
		const user = await prisma.user.findFirst({
			where: {
				email
			},
			include: {
				Account: {
					select: {
						id: true,
						physical_person: true
					}
				},
				UserAccessControl: {
					select: {
						can_create: true,
						can_delete: true,
						can_read: true,
						can_update: true,
						role_name: true,
					}
				}
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
	

