import {Router} from 'express';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { AccountFindOneController } from './controllers/AccounFindOneController';
import { AccountCreateController } from './controllers/AccountCreateController';

const accountsRoutes = Router();

accountsRoutes.get('/:id', needAuthentication, new AccountFindOneController().handle);
accountsRoutes.post('/', needAuthentication, new AccountCreateController().handle);


export {accountsRoutes};