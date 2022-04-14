import 'dotenv/config';
import express from "express";
import { routes } from './routes/index.routes';
const app = express();
import cors from 'cors';
import { mockDelay } from './middlewares/mockDelay';
app.use(cors({origin: process.env.CORS }));
app.use(express.json());
process.env.NODE_ENV != 'production' && app.use(mockDelay);
app.use(routes);
const port = process.env.PORT || 3001;
app.listen(port, process.env.NODE_ENV != 'production' && (() => {
	console.log("Server is running!");
}));