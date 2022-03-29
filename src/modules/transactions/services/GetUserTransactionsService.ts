import { format } from "date-fns";
import { convertToDate } from "../../../common/utils/convertToDate";
import { prisma } from "../../../database/prisma";

class GetUserTransactionsService {
	async execute(account_id : string) {
		return await prisma.transaction.findMany({
			where: {
				account_id
			},
			orderBy: {
				id: 'desc'
			},

		});

	}
  
}

export { GetUserTransactionsService };