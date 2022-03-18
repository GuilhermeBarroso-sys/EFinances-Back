import 'dotenv/config';
import express from "express";
import { routes } from './routes/index.routes';
const app = express();
import cors from 'cors';
import { createDefaultPolicies } from './modules/users/functions/userAccessControl/createDefaultPolicies';
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log("Server is running!");
});