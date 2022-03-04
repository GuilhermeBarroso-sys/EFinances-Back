import { User } from '@prisma/client';
import {sign} from 'jsonwebtoken';
import { UserValidation } from '../../../common/validations/users/UserValidation';
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

		const {emailExists,correctPassword} = new UserValidation();
		const {alreadyExists, user} = await emailExists(email, true);
		if(!alreadyExists) {
			throw new Error("invalid Email!");
		}
		if(!correctPassword(password, user.email)) {
			throw new Error("Invalid Password");
		}

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