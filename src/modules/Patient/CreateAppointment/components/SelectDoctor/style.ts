import styled from 'styled-components';

export const SelectDoctorContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-grow: 1;
	gap: 1em;

	.specialty-select-container,
	.doctor-select-container {
		font: 400 17px/24px 'Poppins';
		color: ${({ theme: { colors } }) => colors.black};
		border-color: ${({ theme: { colors } }) => colors.solidGrey};
	}

	.specialty-select__control,
	.doctor-select__control {
		border-radius: 8px;
	}

	.specialty-select__value-container,
	.doctor-select__value-container {
		padding: 1em;
	}

	.specialty-select__indicators,
	.doctor-select__indicators {
		margin-right: 10px;
	}

	.specialty-select__indicator-separator,
	.doctor-select__indicator-separator {
		display: none;
	}
`;
