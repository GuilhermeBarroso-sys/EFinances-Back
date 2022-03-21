import 'dotenv/config';
import express from "express";
import { routes } from './routes/index.routes';
const app = express();
import cors from 'cors';
import { mockDelay } from './middlewares/mockDelay';
import compression from 'compression';
app.use(compression());
app.use(cors({origin: '*'}));
app.use(express.json());
process.env.ENVIROMENT != 'production' && app.use(mockDelay);
app.use(routes);
const port = process.env.PORT || 3001;
console.log(process.env.NODE_ENV);
app.listen(port, process.env.ENVIROMENT != 'production' && (() => {
	console.log("Server is running!");
}));