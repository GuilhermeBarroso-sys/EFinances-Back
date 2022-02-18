import { prisma } from "../../../database/prisma";
import {UserValidation} from '../../../common/validations/users/UserValidation';
import bcrypt from 'bcrypt';
interface DTOUserCreateService {
	name: string;
	email: string;
	password: string;
}

class UserCreateService {
	async execute({name,email,password}: DTOUserCreateService) {
		const {emailExists} = new UserValidation();
		if(await emailExists(email)) {
			throw new Error("Email Already Exists!");
		}
		const hashPassword = await bcrypt.hash(password, 10);
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