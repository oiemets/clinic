import styled from 'styled-components';
import { Colors } from '../../styles';

export type BtnProps = {
	variant?: Colors;
	titleColor?: Colors;
	border?: Colors;
	fontLighter?: boolean;
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
	font: 600 17px/19.5px 'Poppins';
	padding: 16px 27px;

	:hover {
		background-color: ${({ theme: { colors } }) => colors.darkBlue};
	}

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		padding: 15px 24px;
		font: 600 15px/19.5px 'Poppins';
	}
`;

export const IconPosition = styled.div`
	transform: translate(50%, 0%);
`;
