import {Router} from 'express';
import { AccountFindOneController } from './controllers/AccounFindOneController';
import { AccountCreateController } from './controllers/AccountCreateController';

const accountsRoutes = Router();

accountsRoutes.get('/:id', new AccountFindOneController().handle);
accountsRoutes.post('/', new AccountCreateController().handle);


export {accountsRoutes};