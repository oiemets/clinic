import styled from 'styled-components';
import { Icon } from 'components';

type DateCellProps = CalendarElementsProps & {
	isToday?: boolean;
};

type CalendarElementsProps = {
	active?: boolean;
};

export const MainCalendarWrapper = styled.div`
	display: inline-block;
`;

export const CalendarWrapper = styled.div<CalendarElementsProps>`
	font: 600 17px/24px 'Poppins';
	color: ${({ theme: { colors }, active }) =>
		active ? colors.black : colors.solidGrey};
	border-radius: 12px;
	background-color: ${({ theme: { colors } }) => colors.white};
`;

export const MonthWrapper = styled.div<CalendarElementsProps>`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	padding: 2em 2em;

	:hover {
		cursor: ${({ active }) => (active ? 'pointer' : 'unset')};
	}

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}) {
		padding: 0;
	}
`;

export const CalendarHeader = styled.div<CalendarElementsProps>`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 2em 2em;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const CalendarTitle = styled.h1<CalendarElementsProps>`
	font: 600 17px/24px 'Poppins';
	color: ${({ theme: { colors }, active }) =>
		active ? colors.black : colors.solidGrey};
`;

export const CalendarCell = styled.div<DateCellProps>`
	text-align: center;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		cursor: ${({ active }) => (active ? 'pointer' : 'unset')};
	}
`;

export const CalendarHeaderCell = styled.div<CalendarElementsProps>`
	font: 500 13px/20px 'Poppins';
	text-align: center;
	margin: 1em 0;
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const CurrentDateCell = styled(CalendarCell)<DateCellProps>`
	color: ${({ theme: { colors }, active }) =>
		active ? colors.lightBlue : colors.solidGrey};
	border: 1px solid
		${({ theme: { colors }, active }) =>
			active ? colors.lightBlue : colors.solidGrey};
	border-radius: 12px;
`;

export const SelectedDateCell = styled(CalendarCell)<DateCellProps>`
	background-color: ${({ theme: { colors }, active }) =>
		active ? colors.lightBlue : colors.solidGrey};
	color: #fff;
	border-radius: 12px;
	border: ${({ theme: { colors }, isToday }) =>
		isToday ? `1px solid ${colors.white}` : 'none'};
`;

export const AdjacentCell = styled(CalendarCell)<DateCellProps>`
	color: ${({ theme: { colors } }) => colors.solidGrey};
`;

export const ArrowIcon = styled(Icon)`
	:hover {
		cursor: pointer;
	}
`;
