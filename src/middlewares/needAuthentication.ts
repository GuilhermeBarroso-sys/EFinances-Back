import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';
interface DTOPayload {
	sub: string;
}

function needAuthentication(request:  Request, response: Response, next: NextFunction) {
	const {authorization} = request.headers;
	if(!authorization) {return response.status(401).json({error: "Token not found"});}
	try {
		const [, token] = authorization.split(" ");
		const { sub } = verify(token, process.env.JWT_USER_SECRET) as DTOPayload;
		request.user_id = sub;
		return next();
	} catch (err) {
		return response.status(401).json({
			error: 'invalid.token',
			exceptionMessage: err.message
		});
	}
}

export { needAuthentication };