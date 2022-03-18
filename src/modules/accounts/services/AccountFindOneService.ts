import { prisma } from "../../../database/prisma";

interface DTOAccountFindOneService {
	id: string;
	includeUser? : boolean;
}
class AccountFindOneService {
	async execute({id,includeUser = true} : DTOAccountFindOneService) {
		if(!id) throw new Error("400");
		const account =  await prisma.account.findUnique({
			where: {
				id
			},
			include: {
				user: includeUser,
				Transaction: true
			}
		});
		if(!account) {
			throw new Error("Conta inexistente!");
		}
		includeUser && delete account.user.password;
		return account;
	}
}

export {AccountFindOneService};