import { Request, Response } from "express";
import { AccountCreateService } from "../services/AccountCreateService";

class AccountCreateController {
	async handle(request: Request, response: Response) {
		const {user_id} = request;
		const {physical_person} = request.body;
		const accountCreateService = new AccountCreateService();
		try {
			await accountCreateService.execute({user_id,physical_person});
			return response.status(201).send();
		} catch({message}) {
			return response.status(404).json();
		}
	}
}

export { AccountCreateController };