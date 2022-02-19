import { Request, Response } from "express";

class UserAuthenticateController {
	async handle(request: Request, response: Response) {
		const {email , password} = request.body;

    
	}
}

export {UserAuthenticateController};