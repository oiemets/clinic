import { useCallback } from 'react';
import DatePicker from 'react-datepicker';
import { format, isSameDay } from 'date-fns';
import {
	CalendarContainer,
	CalendarInnerWrapper,
	CalendarDayCell,
	ArrowIcon,
	CalendarHeader,
	CalendarHeaderTitle,
	CalendarTitleContainer,
} from './style';

import { SelectHeader } from '../SelectHeader';

type SelecDateProps = {
	selected?: Date | null | undefined;
	availableAppointments?: string[];
	dateOnChange: (date: any) => void;
};

export const SelectDate = ({
	selected,
	availableAppointments,
	dateOnChange,
}: SelecDateProps) => {
	const onChange = useCallback(date => dateOnChange(date), [dateOnChange]);

	// const disabledTimeSlots = (start: number, end: number) => {
	// 	const res = [];
	// 	for (let i = start; i <= end; i++) {
	// 		res.push(setHours(setMinutes(new Date(), 0), i));
	// 	}
	// 	return res;
	// };

	return (
		<DatePicker
			timeCaption=''
			title='2huy'
			timeIntervals={60}
			selected={selected}
			onChange={onChange}
			showTimeSelect
			inline
			// includeTimes={
			// 	availableAppointments?.length === 0
			// 		? disabledTimeSlots(9, 18)
			// 		: availableAppointments?.map(d => new Date(d))
			// }
			includeTimes={availableAppointments?.map(d => new Date(d))}
			calendarContainer={props => {
				return (
					<CalendarContainer>
						<CalendarTitleContainer>
							<SelectHeader
								number='2'
								title='Choose a day for an appointment'
							/>
							<SelectHeader number='3' title='Select an available timeslot' />
						</CalendarTitleContainer>

						<CalendarInnerWrapper active={availableAppointments?.length === 0}>
							{props.children}
						</CalendarInnerWrapper>
					</CalendarContainer>
				);
			}}
			renderCustomHeader={({
				date,
				changeYear,
				changeMonth,
				decreaseMonth,
				increaseMonth,
				prevMonthButtonDisabled,
				nextMonthButtonDisabled,
			}) => {
				return (
					<CalendarHeader>
						<ArrowIcon
							icon='angleleft'
							color='mediumGrey'
							onClick={decreaseMonth}
						/>
						<CalendarHeaderTitle>{format(date, 'MMMM')}</CalendarHeaderTitle>
						<ArrowIcon
							icon='angleright'
							color='mediumGrey'
							onClick={increaseMonth}
						/>
					</CalendarHeader>
				);
			}}
			renderDayContents={(dayOfMonth, date) => {
				return (
					<CalendarDayCell
						active={isSameDay(new Date(selected ?? ''), new Date(date ?? ''))}
					>
						{dayOfMonth}
					</CalendarDayCell>
				);
			}}
			formatWeekDay={weekDayString => <>{weekDayString[0]}</>}
			calendarStartDay={1}
		/>
	);
};
