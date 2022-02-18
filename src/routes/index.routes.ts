import {Router} from 'express';
import { usersRoutes } from '../modules/users/users.routes';
const routes = Router();

routes.use('/users', usersRoutes);

export {routes};