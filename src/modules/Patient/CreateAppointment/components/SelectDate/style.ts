import styled from 'styled-components';

import { Icon } from 'components';

type CalendarElementsProps = {
	active?: boolean;
};

export const CalendarContainer = styled.div`
	/* display: inline-block; */
	/* padding: 10px; */
	/* border: 1px solid pink; */

	.react-datepicker__month {
		display: flex;
		flex-flow: column nowrap;
		/* border: 1px solid orange; */
		background-color: ${({ theme: { colors } }) => colors.white};
	}

	.react-datepicker__week {
		display: flex;
		justify-content: space-around;
		margin: 0.5em 0;
	}
`;

export const CalendarTitleContainer = styled.div`
	display: flex;
	gap: 30px;
	/* justify-content: space-around; */

	/* border: 1px solid black; */
`;

export const CalendarInnerWrapper = styled.div<CalendarElementsProps>`
	display: flex;
	gap: 30px;
	font: 600 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};

	/* border: 1px solid blue; */

	.react-datepicker__month-container {
		background-color: white;
		/* border: 1px solid brown; */
		padding: 15px 30px;
		/* height: fit-content; */
		/* min-width: 330px; */
		/* min-height: 300px; */
		height: max-content;
		border-radius: 12px;
	}

	.react-datepicker__time-container {
	}

	.react-datepicker__header--time {
	}

	.react-datepicker-time__header {
	}

	.react-datepicker__time {
	}

	.react-datepicker__time-box {
		/* border: 1px solid orange; */
		width: 100%;
	}

	.react-datepicker__time-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}

	.react-datepicker__time-list-item {
		padding: 8px 0;
		min-width: 104px;
		height: 40px;
		text-align: center;
		border-radius: 8px;
		background: ${({ theme: { colors }, active }) =>
			active ? colors.solidGrey : colors.white};
		color: ${({ theme: { colors }, active }) => (active ? colors.white : '')};
		font: 600 15px 'Poppins';
	}

	.react-datepicker__time-list-item--disabled {
		background: ${({ theme: { colors } }) => colors.solidGrey};
		color: ${({ theme: { colors } }) => colors.white};
	}

	.react-datepicker__time-list-item:hover {
		${({ active }) => (active ? {} : { cursor: 'pointer' })}
	}

	.react-datepicker__time-list-item--selected {
		outline: ${({ theme: { colors }, active }) =>
			active ? '' : `1px solid ${colors.lightBlue}`};
		color: ${({ theme: { colors }, active }) =>
			active ? '' : colors.lightBlue};
	}

	.react-datepicker__day-names {
		/* border: 1px solid aqua; */
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		font: 500 13px/20px 'Poppins';
		color: ${({ theme: { colors } }) => colors.mediumGrey};
		margin: 1em 0;
	}

	.react-datepicker__day-name {
	}

	.react-datepicker__day--selected {
		background-color: ${({ theme: { colors } }) => colors.lightBlue};
		color: #fff;
		border-radius: 12px;
	}

	.react-datepicker__day--today {
		color: ${({ theme: { colors } }) => colors.lightBlue};
		border: 1px solid ${({ theme: { colors } }) => colors.lightBlue};
		border-radius: 12px;
	}
`;

export const CalendarHeader = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	/* padding: 1em; */
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const CalendarDayCell = styled.div<CalendarElementsProps>`
	${({ active }) => (active ? { color: '#fff' } : {})}
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	:hover {
		cursor: pointer;
	}
`;

export const CalendarHeaderTitle = styled.h1<CalendarElementsProps>`
	font: 600 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
`;

// export const CalendarHeaderCell = styled.div<CalendarElementsProps>`
// 	font: 500 13px/20px 'Poppins';
// 	text-align: center;
// 	margin: 1em 0;
// 	color: ${({ theme: { colors } }) => colors.mediumGrey};
// `;

export const ArrowIcon = styled(Icon)`
	:hover {
		cursor: pointer;
	}
`;
