import {
	CalendarWrapper,
	MonthWrapper,
	CalendarHeader,
	CalendarTitle,
	CalendarCell,
	CalendarHeaderCell,
	CurrentDateCell,
	SelectedDateCell,
	ArrowIcon,
	AdjacentCell,
} from './style';
import { format, isEqual, isSameDay, isSameMonth } from 'date-fns';

import { useCalendar } from './useCalendar';

export const SelectDay = () => {
	const [
		calendar,
		weekLabels,
		currentMonth,
		currentDate,
		selectedDate,
		monthBack,
		monthForward,
		onClick,
	] = useCalendar();

	const cellType = (d: Date) => {
		if (isSameDay(d, new Date()) && !isSameDay(d, selectedDate))
			return CurrentDateCell;
		if (isEqual(d, selectedDate) || isSameDay(d, selectedDate))
			return SelectedDateCell;
		if (!isSameMonth(d, currentDate)) return AdjacentCell;
		return CalendarCell;
	};

	return (
		<CalendarWrapper>
			<CalendarHeader>
				<ArrowIcon icon='angleleft' color='mediumGrey' onClick={monthBack} />
				<CalendarTitle>{currentMonth}</CalendarTitle>
				<ArrowIcon
					icon='angleright'
					color='mediumGrey'
					onClick={monthForward}
				/>
			</CalendarHeader>
			<MonthWrapper>
				{weekLabels.map((d: string, index: number) => (
					<CalendarHeaderCell key={d + '-' + index}>{d}</CalendarHeaderCell>
				))}

				{calendar.map((d: Date, index: number) => {
					const key = d.toString() + index;
					const cell = format(new Date(d), 'd');
					const isToday = isSameDay(d, selectedDate);
					const CellType = cellType(d);
					const Cell = (
						<CellType
							key={key}
							onClick={() => onClick(d)}
							isToday={isToday}
							children={cell}
						/>
					);
					return Cell;
				})}
			</MonthWrapper>
		</CalendarWrapper>
	);
};
