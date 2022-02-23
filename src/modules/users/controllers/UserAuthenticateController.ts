import { Request, Response } from "express";
import { UserAuthenticateService } from "../services/UserAuthenticateService";

class UserAuthenticateController {
	async handle(request: Request, response: Response) {
		const {email , password} = request.body;
		const userAuthenticateService = new UserAuthenticateService();
		try {
			const authenticate = await userAuthenticateService.execute({email,password});
			return response.status(200).json(authenticate);
		} catch(err) {
			return response.status(401).json(err.message);
		}
    
	}
}

export {UserAuthenticateController};