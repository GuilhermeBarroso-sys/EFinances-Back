interface DTOAccountCreateService {
	user_id: string;
	physical_person?: boolean;
}

import {UserValidation} from '../../../common/validations/users/UserValidation';
import { prisma } from '../../../database/prisma';

class AccountCreateService {
	async execute({user_id,physical_person} : DTOAccountCreateService) {
		const {userExists} = new UserValidation();
		if(!(await userExists(user_id))) {
			throw new Error("This user doens't exist!");
		}    
		await prisma.account.create({
			data: {
				user_id,
				physical_person
			}
		});
	}
}

export { AccountCreateService };