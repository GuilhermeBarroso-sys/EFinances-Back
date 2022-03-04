import { prisma } from "../../../database/prisma";
import {UserValidation} from '../../../common/validations/users/UserValidation';
import bcrypt from 'bcrypt';
import { randomInt } from "../../../common/utils/randomInt";
interface DTOUserCreateService {
	name: string;
	email: string;
	password: string;

}

class UserCreateService {
	async execute({name,email,password}: DTOUserCreateService) {
		const {emailExists} = new UserValidation();
		const {alreadyExists} = await emailExists(email);
		if(alreadyExists) {
			throw new Error("Email Already Exists!");
		}
		const hashPassword = await bcrypt.hash(password, randomInt());
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashPassword
			}
		});
	}
}

export {UserCreateService};