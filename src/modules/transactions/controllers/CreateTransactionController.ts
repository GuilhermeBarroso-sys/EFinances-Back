import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";

class CreateTransactionsController {
	async handle(request: Request, response : Response) {
		const {name,value, type, datetime, account_id} = request.body;
		try {

			const createTransactionService = new CreateTransactionService();
			const transaction = await createTransactionService.execute({name,value, type, datetime, account_id});
			return response.status(201).json(transaction);
		} catch( {message}) {
			return response.status(400).json(message);
		}
	}

}

export {CreateTransactionsController};