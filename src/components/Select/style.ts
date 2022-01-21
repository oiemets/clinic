import styled from 'styled-components';

type SelectWrapperProps = {
	isError?: boolean;
};

export const SelectWrapper = styled.div<SelectWrapperProps>`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	gap: 1em;

	.select-container {
		font: 400 17px/24px 'Poppins';
		color: ${({ theme: { colors } }) => colors.black};
	}

	.select__control {
		border-radius: 8px;
		border-color: ${({ theme: { colors }, isError }) =>
			isError ? colors.lightRed : colors.solidGrey};
	}

	.select__control {
		:hover {
			border: 1px solid
				${({ theme: { colors }, isError }) =>
					isError ? colors.lightRed : colors.grey};
		}
	}

	.select__value-container {
		padding: 1em;
	}

	.select__indicators {
		margin-right: 10px;
	}

	.select__indicator-separator {
		display: none;
	}
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
