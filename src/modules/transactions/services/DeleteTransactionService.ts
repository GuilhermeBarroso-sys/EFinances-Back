import { prisma } from "../../../database/prisma";

class DeleteTransactionService {
	async execute(target : string) {
		const ids = target.trim().split(',');
		const {count} = await prisma.transaction.deleteMany({
			where: {
				id: {
					in: ids
				}
			}
		});
		return count == 0 ? 202 : 204;
	}
}

export {DeleteTransactionService};