import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

async function needAuthorization(request: Request, response: Response, next: NextFunction) {

	const {user_id, url} = request;
	const [routeUrl,] = url.split('?');
	const route = routeUrl.replace('/', '');
	const roles = await prisma.userAccessControl.findMany({
		where: {
			user_id
		}
	});

	if(!roles) { 
		return response.status(403).json(`this User doesn't have roles!`);
	}

	const role = roles.find(role => role.role_name == route);	
	
	if(role?.isRoot || role?.can_read ) {
		return next();
	}
	return response.status(403).json(`doesn't have permission`);
}

export { needAuthorization};