import 'dotenv/config';
import cors from 'cors';
import express from "express";
import { routes } from './routes/index.routes';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server is running!");
});