import {Router} from 'express';
import { accountsRoutes } from '../modules/accounts/accounts.routes';
import { usersRoutes } from '../modules/users/users.routes';
const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/accounts', accountsRoutes);


export {routes};