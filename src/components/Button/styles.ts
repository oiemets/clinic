import styled from 'styled-components';
import { Colors } from '../../styles';

export type BtnProps = {
	variant?: Colors;
	titleColor?: Colors;
	border?: Colors;
	size?: keyof typeof sizes;
	fontLighter?: boolean;
};

const sizes = {
	sm: {
		padding: '8px 8px',
		width: '104px',
		height: '40px',
		fontSize: '15px',
		lineHeight: '19.5px',
	},

	md: {
		padding: '8px 16px',
		width: '160px',
		height: '40px',
		fontSize: '15px',
		lineHeight: '19.5px',
	},

	lg: {
		padding: '12px 16px',
		width: '184px',
		height: '48px',
		fontSize: '15px',
		lineHeight: '19.5px',
	},

	xlShort: {
		padding: '16px 24px',
		width: '146px',
		height: '56px',
		fontSize: '17px',
		lineHeight: '24px',
	},

	xl: {
		padding: '16px 24px',
		width: '216px',
		height: '56px',
		fontSize: '17px',
		lineHeight: '24px',
	},
	xxl: {
		padding: '16px 24px',
		width: '224px',
		height: '56px',
		fontSize: '17px',
		lineHeight: '24px',
	},
	xxxl: {
		padding: '16px 24px',
		width: '240px',
		height: '56px',
		fontSize: '17px',
		lineHeight: '24px',
	},
};

export const Btn = styled.button<BtnProps>`
	${({ size }) => sizes[size ?? 'sm']}
	display: flex;
	align-items: center;
	justify-content: center;
	appearance: none;
	cursor: pointer;
	border: ${({ theme: { colors }, border }) =>
		border ? '1px solid ' + colors[border] : 'none'};
	border-radius: 8px;
	font-family: 'Poppins';
	font-weight: ${({ fontLighter }) => (fontLighter ? 400 : 600)};
	background-color: ${({ theme: { colors }, variant }) =>
		variant ? colors[variant] : colors.darkBlue};
	color: ${({ theme: { colors }, titleColor }) =>
		titleColor ? colors[titleColor] : 'white'};

	:hover {
		background-color: ${({ theme: { colors } }) => colors.darkBlue};
	}
`;

export const IconPosition = styled.span`
	transform: translate(50%, 10%);
`;
