import {convertToDate} from '../../../common/utils/convertToDate';
import {isValid} from 'date-fns';
describe("date typeof test", () => {
	it("should return a valid date type" , () => {
		const exampleDate = "2021-05-01";
		const date = convertToDate(exampleDate, 'yyyy-MM-dd');
		expect(isValid(date)).toBe(true);
	});
});
