import {Router} from 'express';
import { mockDelay } from '../../middlewares/mockDelay';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { needAuthorization } from '../../middlewares/needAuthorization';
import { CreateTransactionsController } from './controllers/CreateTransactionController';
import { DeleteTransactionController } from './controllers/DeleteTransactionController';
import { GetUserTransactionsController } from './controllers/GetUserTransactionsController';


const transactionsRoutes = Router();
transactionsRoutes.get('/:account_id', needAuthentication, mockDelay, new GetUserTransactionsController().handle);
transactionsRoutes.post('/', needAuthentication, new CreateTransactionsController().handle);
transactionsRoutes.delete('/', needAuthentication, new DeleteTransactionController().handle);



export {transactionsRoutes};