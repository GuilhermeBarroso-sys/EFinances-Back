import { prisma } from "../../../database/prisma";
import { UserValidationInterface } from "./implements/UserValidationInterface";
class UserValidation implements UserValidationInterface{
	async  emailExists(email: string) {
		const alreadyExists = await prisma.user.findFirst({
			where: {
				email
			}
		});
		return alreadyExists ? true : false;
	}
}

export {UserValidation};
	

