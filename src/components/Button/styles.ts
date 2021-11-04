import styled from 'styled-components';

type Colours =
	| 'lightBlue'
	| 'darkBlue'
	| 'solidGrey'
	| 'lightGrey'
	| 'white'
	| 'mediumGrey';

export type BtnProps = {
	variant?: Colours;
	titleColor?: Colours;
	border?: Colours;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
	fontLighter?: boolean;
};

const sizes = {
	sm: {
		padding: '8px 16px',
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
	justify-content: space-around;
	appearance: none;
	cursor: pointer;
	border: ${({ theme: { colours }, border }) =>
		border ? '1px solid ' + colours[border] : 'none'};
	border-radius: 8px;
	font-family: 'Poppins';
	font-weight: ${({ fontLighter }) => (fontLighter ? 400 : 600)};
	background-color: ${({ theme: { colours }, variant }) =>
		variant ? colours[variant] : colours.darkBlue};
	color: ${({ theme: { colours }, titleColor }) =>
		titleColor ? colours[titleColor] : 'white'};
`;
