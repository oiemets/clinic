import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAvailableAppointments } from 'modules';
import { mapMonthEnd, mapMonthStart, mapMonthAsc } from 'utils';
import {
	format,
	subMonths,
	addMonths,
	endOfMonth,
	startOfMonth,
} from 'date-fns';

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
	const dispatch = useDispatch();

	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

	const monthBack = () => setCurrentDate(subMonths(currentDate, 1));
	const monthForward = () => setCurrentDate(addMonths(currentDate, 1));
	const onClick = (date: Date) => {
		setSelectedDate(date);
		dispatch(getAvailableAppointments(date.toISOString()));
	};

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
