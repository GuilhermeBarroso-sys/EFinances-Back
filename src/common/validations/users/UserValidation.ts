import { prisma } from "../../../database/prisma";
import { UserValidationInterface } from "./implements/UserValidationInterface";
import bcrypt from 'bcrypt';
class UserValidation implements UserValidationInterface{
	async  emailExists(email: string) {
		const alreadyExists = await prisma.user.findFirst({
			where: {
				email
			}
		});
		return alreadyExists ? true : false;
	}

	async correctPassword(password: string, hashedPassword : string) {
		return await bcrypt.compare(password, hashedPassword);
	}
}

export {UserValidation};
	

