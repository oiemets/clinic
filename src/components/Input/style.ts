import styled from 'styled-components';

type IconPositionProps = {
	position?: 'left' | 'right';
};

type InputBarProps = {
	isIcon?: boolean;
};

export const IconPosition = styled.span<IconPositionProps>`
	position: absolute;

	transform: ${({ position }) => {
		if (position === 'left') {
			return 'translate(120%, 50%)';
		}
		if (position === 'right') {
			return 'translate(-200%, 50%)';
		}
	}};

	& path {
		fill: currentColor;
	}
`;

export const InputContainer = styled.div`
	width: 368px;
	margin-bottom: 10px;
	margin-top: 20px;
	position: relative;
`;

export const InputBar = styled.input<InputBarProps>`
	width: 100%;
	height: 56px;
	padding: ${({ isIcon }) =>
		isIcon ? '2px 50px 2px 80px' : '2px 15px 2px 20px'};
	border-radius: 8px;
	border: 1px solid ${({ theme: { colours } }) => colours.solidGrey};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colours } }) => colours.black};
	outline: none;

	::placeholder {
		font: 400 17px/24px 'Poppins';
		color: ${({ theme: { colours } }) => colours.mediumGrey};
	}

	:hover {
		border: 1px solid ${({ theme: { colours } }) => colours.solidGrey};
	}

	:focus {
		border: 1px solid ${({ theme: { colours } }) => colours.lightBlue};
	}
`;
