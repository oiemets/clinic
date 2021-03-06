import styled from 'styled-components';
import { Colors } from '../../styles';

export type BtnProps = {
	variant?: Colors;
	titleColor?: Colors;
	border?: Colors;
	fontLighter?: boolean;
};

type IconPositionProps = {
	left?: boolean;
	right?: boolean;
};

export const Btn = styled.button<BtnProps>`
	border: ${({ theme: { colors }, border }) =>
		border ? '1px solid ' + colors[border] : 'none'};

	background-color: ${({ theme: { colors }, variant }) =>
		variant ? colors[variant] : colors.lightBlue};

	color: ${({ theme: { colors }, titleColor }) =>
		titleColor ? colors[titleColor] : 'white'};
	align-self: flex-start;
	display: flex;
	align-items: center;
	justify-content: center;
	appearance: none;
	cursor: pointer;
	border-radius: 8px;
	font: ${({ fontLighter }) => (fontLighter ? '400' : '500')} 17px/25px
		'Poppins';
	letter-spacing: normal;
	padding: ${({ fontLighter }) => (fontLighter ? '16px 27.5px' : '16px 27px')};
	min-width: 160px;

	:hover {
		background-color: ${({ theme: { colors } }) => colors.darkBlue};
		color: ${({ theme: { colors } }) => colors.white};
	}

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		padding: 15px 24px;
		font: 500 15px/20px 'Poppins';
		font-weight: ${({ fontLighter }) => (fontLighter ? '400' : '')};
		min-width: 120px;
	}
`;

export const IconPosition = styled.div<IconPositionProps>`
	${({ left }) =>
		left ? 'transform: translate(-50%, 0%)' : 'transform: translate(50%, 0%)'}
`;
