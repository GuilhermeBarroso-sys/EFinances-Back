import { prisma } from "../../../database/prisma";
import {UserValidation} from '../validations/users/UserValidation';
import bcrypt from 'bcrypt';
import { randomInt } from "../../../common/utils/randomInt";
import { createDefaultPolicies } from "../functions/userAccessControl/createDefaultPolicies";
interface DTOUserCreateService {
	name: string;
	email: string;
	password: string;
	hierarchy?: string;
}

class UserCreateService {
	async execute({name,email,password, hierarchy = 'user'}: DTOUserCreateService) {
		if(!name || !email || !password) {
			throw new Error("Por favor, preencha os campos obrigatorios!");
		}
		const {emailExists, isValidEmail} = new UserValidation();
		const {alreadyExists} = await emailExists(email);

		if(alreadyExists) throw new Error("Email existente!");
		if(!isValidEmail(email)) throw new Error("Email invalido!");
		
		const hashPassword = await bcrypt.hash(password, randomInt());
		const {id} = await prisma.user.create({
			data: {
				name,
				email,
				hierarchy,
				password: hashPassword,
			}
		});
		await prisma.account.create({
			data: {
				user_id: id
			}
		});
		// const policies = createDefaultPolicies(id);
		// await prisma.userAccessControl.createMany({
		// 	data: [...policies]
		// });
	}
}

export {UserCreateService};