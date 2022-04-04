/**
 * WARNING!
 * DOESN'T USE THIS MIDDLEWARE ON PRODUCTION ENVIROMENT
 */

import { NextFunction, Request, Response } from "express";

export function mockDelay(request: Request, response: Response, next : NextFunction) {
	if(process.env.ENVIROMENT != 'production') {
		
		const delay = request.query.delay as string;
		const logging = request.query.logging as string;
		const ms = parseInt((delay ? delay : '0'));
		logging && console.log(
			`\ndelayed mock successful\nurl: ${request.originalUrl}\ndelay: ${(ms / 1000)} Seconds\n`);
		setTimeout(() => {
			return next();
		},ms);
	} else {
		next();
	}
	
}