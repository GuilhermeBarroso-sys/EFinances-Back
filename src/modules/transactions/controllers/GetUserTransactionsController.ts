import { Request, Response } from "express";
import { GetUserTransactionsService } from "../services/GetUserTransactionsService";

class GetUserTransactionsController  {
	async handle(request : Request, response: Response) {
		const {account_id} = request.params;
		const getUserTransactionsService = new GetUserTransactionsService();
		try {
			const transactions = await getUserTransactionsService.execute(account_id);
			return response.status(200).json(transactions);
		} catch ({message}) {
			return response.status(400).json(message);
		}
	}
}

export { GetUserTransactionsController };