import { randomInt } from "../../../common/utils/randomInt";

describe("random numbers test", () => {
	it("Should cannot greather than 10 or less than 0", () => {
		const randomNumber = randomInt(0,10);
		expect(randomNumber).toBeGreaterThanOrEqual(0);
		expect(randomNumber).toBeLessThanOrEqual(10);
	});
	it("should be a Int number", () => {
		const randomNumber = randomInt().toString();
		expect(randomNumber.split('.').length).toBe(1);
	});
});