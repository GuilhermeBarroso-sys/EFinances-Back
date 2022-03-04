import { Request, Response } from "express";
import { UserFindOneService } from "../services/UserFindOneService";

class UserFindOneController {
	async handle(request: Request, response: Response) {
		const { id } = request.params;
		const userFindOneService = new UserFindOneService();
		try {
			const user = await userFindOneService.execute(id);
			return response.status(200).json(user);
		} catch ( {message}) {
			return response.status(400).json(message);
		}
	}
}

export { UserFindOneController };