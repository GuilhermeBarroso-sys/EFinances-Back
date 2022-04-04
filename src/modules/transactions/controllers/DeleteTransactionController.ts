import { Request, Response } from "express";
import { DeleteTransactionService } from "../services/DeleteTransactionService";

class DeleteTransactionController {
	async handle(request: Request, response: Response) {
		const ids = request.query.ids as string;
		const deleteTransactionService = new DeleteTransactionService();
		try {
			const statusCode = await deleteTransactionService.execute(ids);
			return response.status(statusCode).send();
		} catch(err) {
			return response.status(400).json(err.message);
		}
	}
}

export { DeleteTransactionController };