import DatePicker from 'react-datepicker';
import { format, isSameDay } from 'date-fns';
import { SelectHeader } from '../SelectHeader';
import {
	CalendarContainer,
	CalendarInnerWrapper,
	CalendarDayCell,
	ArrowIcon,
	CalendarHeader,
	CalendarHeaderTitle,
	CalendarTitleContainer,
} from './style';

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
	return (
		<DatePicker
			timeCaption=''
			timeIntervals={60}
			selected={selected}
			onChange={dateOnChange}
			showTimeSelect
			inline
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
			renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
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
