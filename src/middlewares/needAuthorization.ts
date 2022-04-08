import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

async function needAuthorization(request: Request, response: Response, next: NextFunction) {

	const {user_id, baseUrl} = request;
	const role_name = baseUrl.replace('/', '');
	const role = await prisma.userAccessControl.findFirst({
		where: {
			user_id,
			AND: [{
				role_name
			}]
		}, include: {
			user: {
				select: {
					hierarchy: true,
				}
			}
		}
	});
	if(!role) { 
		return response.status(500).json(`this User doesn't have role(s)!`);
	}
	if(role.user.hierarchy === 'root' || role.can_read) {
		return next();
	}
	return response.status(403).json(`doesn't have permission`);
}

export { needAuthorization};