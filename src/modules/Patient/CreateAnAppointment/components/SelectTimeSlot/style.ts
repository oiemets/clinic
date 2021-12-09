import styled from 'styled-components';

type TimeSlotButtonProps = {
	active?: boolean;
	notAvailable?: boolean;
};

export const SelectTimeSlotWrapper = styled.div`
	flex-grow: 1;
`;

export const TimeSlotButton = styled.button<TimeSlotButtonProps>`
	appearance: none;
	border: ${({ theme: { colors }, active }) =>
		active ? `1px solid ${colors.lightBlue}` : '1px solid transparent'};
	border-radius: 8px;
	background: ${({ theme: { colors }, notAvailable }) =>
		notAvailable ? colors.solidGrey : colors.white};
	font: 600 15px 'Poppins';
	color: ${({ theme: { colors }, active }) =>
		active ? colors.lightBlue : colors.black};
	padding: 8px 16px;
	min-width: 104px;

	:hover {
		background: ${({ theme: { colors } }) => colors.lightBlue};
		color: ${({ theme: { colors } }) => colors.white};
		cursor: pointer;
	}

	:active {
		color: ${({ theme: { colors } }) => colors.white};
	}
`;

export const TimeSlotButtonDisabled = styled.button`
	appearance: none;
	border: 1px solid transparent;
	padding: 8px 16px;
	min-width: 104px;
	font: 600 15px 'Poppins';
	color: ${({ theme: { colors } }) => colors.white};
	background: ${({ theme: { colors } }) => colors.solidGrey};
	border-radius: 8px;
`;

export const TimeSlotContainer = styled.div`
	margin-top: 2em;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 5px;

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
