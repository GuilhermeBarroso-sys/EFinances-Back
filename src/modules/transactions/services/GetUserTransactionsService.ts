import { prisma } from "../../../database/prisma";

class GetUserTransactionsService {
	async execute(account_id : string) {
		const transactions =  await prisma.transaction.findMany({
			where: {
				account_id
			},
			orderBy: {
				datetime: 'desc'
			},

		});
		
		const income = transactions.filter(({type}) => type == 'income' ).map(({value}) => {return value;});
		const outcome = transactions.filter(({type}) => type == 'outcome' ).map(({value}) => {return value;});
		const incomeSum = income.length < 1 ? 0 : income.reduce((a,b) => {return a + b;});
		const outcomeSum = outcome.length < 1 ? 0 : outcome.reduce((a,b) => {return a + b;});
		const total = (incomeSum - outcomeSum);
		return {
			transactions,
			income: parseFloat(incomeSum.toFixed(2)),
			outcome:parseFloat(outcomeSum.toFixed(2)),
			total: parseFloat(total.toFixed(2))
		};

    
	}
  
}

export { GetUserTransactionsService };