import { prisma } from "../../../database/prisma";

class GetAuthenticateUserService {
	async execute(id : string) {
		const user = await prisma.user.findUnique({
			where: {
				id
			},
			include: {
				Account: {
					select: {
						id: true,
						physical_person: true
					}
				},
				UserAccessControl: {
					select: {
						can_create: true,
						can_delete: true,
						can_read: true,
						can_update: true,
						role_name: true,
					}
				}
			}
		});
		delete user.password;
		return user;
	}
}

export { GetAuthenticateUserService };