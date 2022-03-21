import {Router} from 'express';
import { mockDelay } from '../../middlewares/mockDelay';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { CreateTransactionsController } from './controllers/CreateTransactionController';


const transactionsRoutes = Router();
// transactionsRoutes.get('/:id', needAuthentication , new ().handle);
transactionsRoutes.post('/', needAuthentication, mockDelay, new CreateTransactionsController().handle);

export {transactionsRoutes};