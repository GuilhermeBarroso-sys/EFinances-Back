/**
 * WARNING!
 * DOESN'T USE THIS MIDDLEWARE ON PRODUCTION ENVIROMENT
 */

import { NextFunction, Request, Response } from "express";

export function mockDelay(request: Request, response: Response, next : NextFunction) {
	if(process.env.ENVIROMENT != 'production') {
		const delay = request.query.delay as string;
		const ms = parseInt((delay ? delay : '2000'));
		setTimeout(() => {
			return next();
		},ms);
	}
	return next();
}