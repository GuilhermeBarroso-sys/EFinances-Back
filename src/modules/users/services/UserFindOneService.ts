import { prisma } from "../../../database/prisma";

class UserFindOneService {
	async execute(id: string) {
		return await prisma.user.findUnique({
			where: {id},
			include: {
				Account: true
			}
		});

	}
}

export { UserFindOneService };