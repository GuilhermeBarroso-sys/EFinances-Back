import { Request, Response } from "express";
import { AccountFindOneService } from "../services/AccountFindOneService";

class AccountFindOneController {
	async handle(request : Request, response : Response) {
		const {id} = request.params; 
		const accountFindOneService = new AccountFindOneService();
		try {
			const account = await accountFindOneService.execute({id});
			return response.status(200).json(account);
		} catch({message}) {
			if(message == 404) {
				return response.status(400).json("missing id parameter!");
			}
			return response.status(404).json(message);
		}
	}
}

export {AccountFindOneController};