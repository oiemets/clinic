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
	MainCalendarWrapper,
} from './style';
import { SelectHeader } from './../SelectHeader';
import { format, isEqual, isSameDay, isSameMonth } from 'date-fns';

import { useCalendar } from 'hooks';

type SelectDayProps = {
	isActive?: boolean;
};

export const SelectDay: React.FC<SelectDayProps> = ({ isActive }) => {
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
		<MainCalendarWrapper>
			<SelectHeader number='2' title='Choose a day for an appointment' />

			<CalendarWrapper active={isActive}>
				<CalendarHeader>
					<ArrowIcon icon='angleleft' color='mediumGrey' onClick={monthBack} />
					<CalendarTitle active={isActive}>{currentMonth}</CalendarTitle>
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
						const CellType = cellType(d);
						const Cell = (
							<CellType
								active={isActive}
								key={d.toString() + index}
								isToday={isSameDay(d, selectedDate)}
								onClick={isActive ? () => onClick(d) : () => {}}
								children={format(new Date(d), 'd')}
							/>
						);
						return Cell;
					})}
				</MonthWrapper>
			</CalendarWrapper>
		</MainCalendarWrapper>
	);
};
