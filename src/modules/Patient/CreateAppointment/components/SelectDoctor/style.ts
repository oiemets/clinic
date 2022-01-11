import styled from 'styled-components';

export const SelectDoctorContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-grow: 1;
	gap: 1.5em;

	.doctor-select-container {
		font: 400 17px/24px 'Poppins';
		color: ${({ theme: { colors } }) => colors.black};
	}

	.doctor-select__control {
		border-radius: 8px;
		border-color: ${({ theme: { colors } }) => colors.solidGrey};
	}

	.doctor-select__value-container {
		padding: 1em;
	}

	.doctor-select__indicators {
		margin-right: 10px;
	}

	.doctor-select__indicator-separator {
		display: none;
	}
`;

export const SelectWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 1em;
`;

export const SelectTitle = styled.h3`
	font: 500 13px/17px 'Poppins';
	color: #000000;
`;

export const ErrorMessage = styled.div`
	position: absolute;
	bottom: -20px;
	font: 400 13px/15.6px 'Poppins';
	color: ${({ theme: { colors } }) => colors.lightRed};

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		bottom: -15px;
		font-size: 10px;
	}
`;
