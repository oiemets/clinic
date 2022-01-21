import styled from 'styled-components';

type TextFieldInputProps = {
	isError?: boolean;
};

export const TextFieldWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 1em;
`;

export const TextFieldTitle = styled.h3`
	font: 500 13px/17px 'Poppins';
	color: #000000;
`;

export const TextFieldContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	position: relative;
`;

export const TextFieldInput = styled.input<TextFieldInputProps>`
	width: 100%;
	padding: 1em;
	border-radius: 8px;
	border: 1px solid
		${({ theme: { colors }, isError }) =>
			isError ? colors.lightRed : colors.solidGrey};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	outline: none;

	::placeholder {
		color: ${({ theme: { colors } }) => colors.mediumGrey};
		font: 400 17px/24px 'Poppins';
	}

	:hover {
		border: 1px solid
			${({ theme: { colors }, isError }) =>
				isError ? colors.lightRed : colors.grey};
	}

	:focus {
		border: 1px solid
			${({ theme: { colors }, isError }) =>
				isError ? colors.lightRed : colors.lightBlue};
	}

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		padding: 0.7em 2em 0.7em 2.7em;
		font: 400 15px/21px 'Poppins';
	}
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
