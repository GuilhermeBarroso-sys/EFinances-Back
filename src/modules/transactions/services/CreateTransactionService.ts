import { prisma } from "../../../database/prisma";
import {isValid} from 'date-fns';
import { convertToDate } from "../../../common/utils/convertToDate";
interface DTOICreateTransactionService {
	value: number, 
	category: string, 
	datetime: string|Date, 
	account_id: string
}
class CreateTransactionService {
	async execute({value, category, datetime, account_id} : DTOICreateTransactionService) {
		datetime = typeof(datetime) == 'string' ? convertToDate(datetime, 'yyyy-MM-dd HH:mm:ss') : datetime;
		await prisma.transaction.create({
			data: {
				value, category, datetime, account_id
			}
		});
	}
}

export {CreateTransactionService};