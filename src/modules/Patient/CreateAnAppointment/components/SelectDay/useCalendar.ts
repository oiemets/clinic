import { useState } from 'react';
import {
	format,
	subMonths,
	addMonths,
	startOfWeek,
	endOfWeek,
	addDays,
	endOfMonth,
	startOfMonth,
	isLastDayOfMonth,
	isFirstDayOfMonth,
	subDays,
} from 'date-fns';

const mapMonthAsc = (day: Date): Date[] => {
	let res = [];
	let count = day;
	while (!isLastDayOfMonth(count)) {
		res.push(count);
		count = addDays(count, 1);
	}
	res.push(count);
	return res;
};

const mapMonthDesc = (day: Date): Date[] => {
	let res = [];
	let count = day;
	while (!isFirstDayOfMonth(count)) {
		res.unshift(count);
		count = subDays(count, 1);
	}
	res.unshift(count);
	return res;
};

const mapMonthStart = (date: Date): any => {
	const startWeek = startOfWeek(date, { weekStartsOn: 1 });
	return isFirstDayOfMonth(startWeek) ? [] : mapMonthAsc(startWeek);
};

const mapMonthEnd = (date: Date): any => {
	const endWeek = endOfWeek(date, { weekStartsOn: 1 });
	return isLastDayOfMonth(endWeek) ? [] : mapMonthDesc(endWeek);
};

type UseCalendarType = [
	Date[],
	string[],
	string,
	Date,
	Date,
	() => void,
	() => void,
	(date: Date) => void
];

export const useCalendar = (): UseCalendarType => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

	const monthBack = () => setCurrentDate(subMonths(currentDate, 1));
	const monthForward = () => setCurrentDate(addMonths(currentDate, 1));
	const onClick = (date: Date) => setSelectedDate(date);

	const startMonth = startOfMonth(currentDate);
	const endMonth = endOfMonth(currentDate);

	const currentMonth = format(currentDate, 'MMMM yyyy');

	const fullMonth = mapMonthAsc(startMonth);
	const monthStart = mapMonthStart(startMonth);
	const monthEnd = mapMonthEnd(endMonth);

	const calendar = [...monthStart, ...fullMonth, ...monthEnd];

	const weekLabels = calendar
		.filter((_, i: number) => i < 7)
		.map((d: Date) => format(d, 'EEEEE'));

	return [
		calendar,
		weekLabels,
		currentMonth,
		currentDate,
		selectedDate,
		monthBack,
		monthForward,
		onClick,
	];
};
