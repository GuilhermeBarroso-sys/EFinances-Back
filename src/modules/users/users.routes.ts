import {Router} from 'express';
import { needAuthentication } from '../../middlewares/needAuthentication';
import { GetAuthenticateUserController } from './controllers/GetAuthenticateUserController';
import { UserAuthenticateController } from './controllers/UserAuthenticateController';
import { UserCreateController } from './controllers/UserCreateController';
import { UserFindOneController } from './controllers/UserFindOneController';

const usersRoutes = Router();
usersRoutes.get('/', needAuthentication , new GetAuthenticateUserController().handle);
usersRoutes.get('/:id', needAuthentication , new UserFindOneController().handle);
usersRoutes.post('/' , new UserCreateController().handle);
usersRoutes.post('/authenticate', new UserAuthenticateController().handle);

export {usersRoutes};