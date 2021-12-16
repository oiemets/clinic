import styled from 'styled-components';

export const CreateAppointmentWrapper = styled.div``;

export const CreateAppointmentFormWrapper = styled.form`
	display: flex;
	flex-flow: row wrap;
	gap: 20px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: fit-content;
`;

export const DisabledButton = styled.button`
	border: 0;
	background: ${({ theme: { colors } }) => colors.solidGrey};
	color: ${({ theme: { colors } }) => colors.white};
	appearance: none;
	border-radius: 8px;
	font: 500 17px/25px 'Poppins';
	letter-spacing: normal;
	padding: 16px 27px;
	min-width: 160px;

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		padding: 15px 24px;
		font: 500 15px/20px 'Poppins';
		min-width: 120px;
	}
`;
