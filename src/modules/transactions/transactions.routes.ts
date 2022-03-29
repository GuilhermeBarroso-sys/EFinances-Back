import {Router} from 'express';
import { mockDelay } from '../../middlewares/mockDelay';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { needAuthorization } from '../../middlewares/needAuthorization';
import { CreateTransactionsController } from './controllers/CreateTransactionController';
import { GetUserTransactionsController } from './controllers/GetUserTransactionsController';


const transactionsRoutes = Router();
transactionsRoutes.get('/:account_id', needAuthentication, needAuthorization, mockDelay, new GetUserTransactionsController().handle);
transactionsRoutes.post('/', needAuthentication, new CreateTransactionsController().handle);


export {transactionsRoutes};