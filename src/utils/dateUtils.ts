import {
	startOfWeek,
	endOfWeek,
	addDays,
	isLastDayOfMonth,
	isFirstDayOfMonth,
	subDays,
	add,
	isEqual,
} from 'date-fns';

export const mapMonthAsc = (day: Date): Date[] => {
	let res = [];
	let count = day;
	while (!isLastDayOfMonth(count)) {
		res.push(count);
		count = addDays(count, 1);
	}
	res.push(count);
	return res;
};

export const mapMonthDesc = (day: Date): Date[] => {
	let res = [];
	let count = day;
	while (!isFirstDayOfMonth(count)) {
		res.unshift(count);
		count = subDays(count, 1);
	}
	res.unshift(count);
	return res;
};

export const mapMonthStart = (date: Date): any => {
	const startWeek = startOfWeek(date, { weekStartsOn: 1 });
	return isFirstDayOfMonth(startWeek) ? [] : mapMonthAsc(startWeek);
};

export const mapMonthEnd = (date: Date): any => {
	const endWeek = endOfWeek(date, { weekStartsOn: 1 });
	return isLastDayOfMonth(endWeek) ? [] : mapMonthDesc(endWeek);
};

export const addHours = (date: Date, hours: number) => {
	let res = [];
	const end = add(date, { hours });
	let count = date;

	while (!isEqual(count, end)) {
		res.push(count);
		count = add(count, { hours: 1 });
	}
	res.push(count);
	return res;
};
