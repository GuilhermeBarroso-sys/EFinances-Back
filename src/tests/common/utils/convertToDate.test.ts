import {convertToDate} from '../../../common/utils/convertToDate';
import {isValid} from 'date-fns';
import { createHash } from 'crypto';
describe("testing date libs", () => {
	const exampleDate = "2021-05-01";
	it("should return a valid date type" , () => {
		const date = convertToDate(exampleDate, 'yyyy-MM-dd');

		expect(isValid(date)).toBe(true);
	});
});
