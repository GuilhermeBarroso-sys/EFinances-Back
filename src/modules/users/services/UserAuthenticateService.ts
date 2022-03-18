import { User } from '@prisma/client';
import {sign} from 'jsonwebtoken';
import { UserValidation } from '../validations/users/UserValidation';
import { prisma } from '../../../database/prisma';

interface DTOAuthenticateService {
	email: string;
	password: string;
}

interface DTOAuthenticateResponse {
	user: User,
	token: string
}
class UserAuthenticateService {
	async execute({email, password} : DTOAuthenticateService) :  Promise<DTOAuthenticateResponse> {
		if(!email || !password) throw new Error("Por favor, preencha os campos obrigatorios!");
		const {emailExists,correctPassword} = new UserValidation();
		const {alreadyExists, user} = await emailExists(email, true);

		if(!alreadyExists) throw new Error("Email Invalido!");
		if(!correctPassword(password, user.email)) throw new Error("Senha invalida!");
		
		delete user.password;
		const token = sign(
			{
				user
			},
			process.env.JWT_USER_SECRET,
			{
				subject: user.id,
			}
		);
		return {user, token};
	}
}

export {UserAuthenticateService};