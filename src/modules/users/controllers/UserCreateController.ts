import { Request, Response } from "express";
import {  } from '../../../common/validations/users/UserValidation';
import { UserCreateService } from "../services/UserCreateService";
class UserCreateController {
	async handle(request: Request, response : Response) {
		const {name,email,password} = request.body;
		const userCreateService = new UserCreateService();
		try {
			await userCreateService.execute({name,email,password});
			return response.status(201).send();
		} catch(err) {
			return response.status(400).json(err.message);
		}

	}
}

export {UserCreateController};