import {Router} from 'express';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { CreateTransactionsController } from './controllers/CreateTransactionController';


const transactionsRoutes = Router();
// transactionsRoutes.get('/:id', needAuthentication , new ().handle);
transactionsRoutes.post('/', needAuthentication, new CreateTransactionsController().handle);

export {transactionsRoutes};