/**
 * WARNING!
 * DOESN'T USE THIS MIDDLEWARE ON PRODUCTION ENVIROMENT
 */

import { NextFunction, Request, Response } from "express";

export function mockDelay(request: Request, response: Response, next : NextFunction, logging = true) {
	if(process.env.ENVIROMENT != 'production') {
		
		const delay = request.query.delay as string;
		const ms = parseInt((delay ? delay : '1000'));
		logging && console.log(
			`\ndelayed mock successful\nurl: ${request.url}\ndelay: ${ms} ms\n`);
		setTimeout(() => {

			return next();
		},ms);
	} else {
		next();
	}
	
}