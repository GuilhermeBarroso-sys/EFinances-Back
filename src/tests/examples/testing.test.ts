import { randomUUID } from "crypto";
import { prismaMock } from "../../../singleton";

describe("mock prisma", () => {

	it('should create new user ', async () => {
		prismaMock.user.create.mockResolvedValue({
			id: `${randomUUID()}`,
			name: 'Gui',
			email: 'gui@gmail.com',
			password: '123'

		});

    
	});
});