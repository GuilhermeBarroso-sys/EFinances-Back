import {Router} from 'express';
import { UserCreateController } from './controllers/UserCreateController';

const usersRoutes = Router();
usersRoutes.post('/', new UserCreateController().handle);
export {usersRoutes};