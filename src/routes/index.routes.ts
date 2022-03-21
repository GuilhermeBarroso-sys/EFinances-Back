import {Router} from 'express';
import { accountsRoutes } from '../modules/accounts/accounts.routes';
import { transactionsRoutes } from '../modules/transactions/transactions.routes';
import { usersRoutes } from '../modules/users/users.routes';
const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/accounts',accountsRoutes);
routes.use('/transactions',transactionsRoutes);



export {routes};