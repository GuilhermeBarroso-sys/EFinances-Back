import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";

class CreateTransactionsController {
	async handle(request: Request, response : Response) {
		const {value, category, datetime, account_id} = request.body;
		try {
			const createTransactionService = new CreateTransactionService();
			await createTransactionService.execute({value, category, datetime, account_id});
			return response.status(201).send();
		} catch( {message}) {
			return response.status(400).json(message);
		}
	}

}

export {CreateTransactionsController};