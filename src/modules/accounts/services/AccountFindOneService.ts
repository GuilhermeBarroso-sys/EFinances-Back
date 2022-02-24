import { prisma } from "../../../database/prisma";

interface DTOAccountFindOneService {
	id: string;
	includeUser? : boolean;
}
class AccountFindOneService {
	async execute({id,includeUser = true} : DTOAccountFindOneService) {
		if(!id) throw new Error("400");
		console.log(id);
		const account =  await prisma.account.findUnique({
			where: {
				id
			},
			include: {
				user: includeUser
			}
		});
		if(!account) {
			throw new Error("Account doesn't exist!");
		}
		includeUser && delete account.user.password;
		return account;
	}
}

export {AccountFindOneService};