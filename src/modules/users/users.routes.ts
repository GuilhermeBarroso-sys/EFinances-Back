import {Router} from 'express';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { UserAuthenticateController } from './controllers/UserAuthenticateController';
import { UserCreateController } from './controllers/UserCreateController';

const usersRoutes = Router();
usersRoutes.post('/', needAuthentication , new UserCreateController().handle);
usersRoutes.post('/authenticate', new UserAuthenticateController().handle);

export {usersRoutes};