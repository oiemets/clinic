import styled from 'styled-components';
import { Colors } from 'styles';

type IconPositionProps = {
	left?: boolean;
	right?: boolean;
};

export type InputBarProps = {
	isIcon?: boolean;
	borderColor?: Colors | null;
};

export const IconPosition = styled.span<IconPositionProps>`
	position: absolute;
	left: ${({ left }) => (left ? '5%' : '')};
	right: ${({ right }) => (right ? '5%' : '')};

	& path {
		fill: currentColor;
	}

	:hover {
		cursor: ${({ right }) => (right ? 'pointer' : 'unset')};
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	position: relative;
`;

export const InputBar = styled.input<InputBarProps>`
	width: 100%;
	padding: 1em 1em 1em 3.5em;
	border-radius: 8px;
	border: 1px solid
		${({ theme: { colors }, borderColor }) =>
			colors[borderColor ?? 'solidGrey']};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	outline: none;

	::placeholder {
		color: ${({ theme: { colors } }) => colors.mediumGrey};
		font: 400 17px/24px 'Poppins';
	}

	:hover {
		border: 1px solid
			${({ theme: { colors }, borderColor }) =>
				colors[borderColor ?? 'solidGrey']};
	}

	:focus {
		border: 1px solid
			${({ theme: { colors }, borderColor }) =>
				borderColor ? colors[borderColor] : colors.lightBlue};
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
