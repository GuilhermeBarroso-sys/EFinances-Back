import { parse } from "date-fns";
import { format } from "date-fns";

function convertToDate(dateString : string, dateStringFormat : string) {
	return parse(dateString, dateStringFormat, new Date());
}

export { convertToDate };