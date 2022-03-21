import { Request, Response } from "express";
import { GetAuthenticateUserService } from "../services/GetAuthenticateUserService";

class GetAuthenticateUserController {
	async handle(request: Request, response: Response) {
		const {user_id} = request;
		const getAuthenticateUserService = new GetAuthenticateUserService();
		try {
			const user = await getAuthenticateUserService.execute(user_id);
			return response.status(200).json(user);
		} catch( err) {
			return response.status(400).json(err.message);
		}
	}
}

export {GetAuthenticateUserController};