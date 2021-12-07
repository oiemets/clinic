import styled from 'styled-components';

export const CreateAnAppointmentWrapper = styled.div`
	width: 100%;
	height: 100%;

	@media (max-height: 685px) {
		height: 520px;
	}
`;

export const CreateAnAppointmentFormWrapper = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
`;

export const ButtonWrapper = styled.div`
	align-self: flex-end;
`;
