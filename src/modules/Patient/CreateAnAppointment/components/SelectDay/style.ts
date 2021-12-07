import styled from 'styled-components';
import { Icon } from 'components';

type DateCellProps = {
	isToday?: boolean;
};

export const CalendarWrapper = styled.div`
	width: 400px;
	height: 473px;
	font: 600 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	display: flex;
	flex-flow: column nowrap;
	border-radius: 12px;
	background-color: #fff;
`;

export const MonthWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	width: 100%;
	height: 384px;
	align-self: center;
	padding: 0 2em;

	:hover {
		cursor: pointer;
	}
`;

export const CalendarHeader = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 2em 2em;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const CalendarTitle = styled.h1`
	font: 600 17px/24px 'Poppins';
	color: #000;
`;

export const CalendarCell = styled.div<DateCellProps>`
	text-align: center;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		cursor: pointer;
	}
`;

export const CalendarHeaderCell = styled.div`
	font: 500 13px/20px 'Poppins';
	text-align: center;
	margin: 1em 0;
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const CurrentDateCell = styled(CalendarCell)<DateCellProps>`
	color: ${({ theme: { colors } }) => colors.lightBlue};
	border: 1px solid ${({ theme: { colors } }) => colors.lightBlue};
	border-radius: 12px;
`;

export const SelectedDateCell = styled(CalendarCell)<DateCellProps>`
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
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
