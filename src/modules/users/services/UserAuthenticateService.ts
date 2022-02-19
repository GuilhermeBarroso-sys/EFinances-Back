import {sign} from 'jsonwebtoken';
import { UserValidation } from '../../../common/validations/users/UserValidation';
import { prisma } from '../../../database/prisma';

interface DTOAuthenticateService {
	email: string;
	password: string;
}

class UserAuthenticateService {
	async execute({email, password} : DTOAuthenticateService) {

		const {correctPassword} = new UserValidation;
		const user = await prisma.user.findFirst({
			where: {
				email
			}
		});
		if(!user) {
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