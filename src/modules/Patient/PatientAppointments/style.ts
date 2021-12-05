import styled from 'styled-components';

export const AppointmentsMainSectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CreateAppointmentButtonWrapper = styled.div`
	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.md}) {
		display: none;
	}
`;
