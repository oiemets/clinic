import styled from 'styled-components';

type IconPositionProps = {
	position?: 'left' | 'right';
};

export type InputBarProps = {
	isIcon?: boolean;
	inputSize?: keyof typeof sizes;
};

export const sizes = {
	sm: {
		minHeight: '40px',
		font: "400 15px/21px 'Poppins'",
		'::placeholder': {
			font: "font: 400 15px/21px 'Poppins'",
		},
	},

	lg: {
		minHeight: '56px',
		font: "400 17px/24px 'Poppins'",
		'::placeholder': {
			font: "font: 400 15px/21px 'Poppins'",
		},
	},
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
	width: 100%;
	position: relative;
`;

export const InputBar = styled.input<InputBarProps>`
	${({ inputSize }) => sizes[inputSize ?? 'lg']}

	padding: ${({ inputSize, isIcon }) =>
		inputSize === 'sm'
			? isIcon
				? '2px 25px 2px 50px'
				: '2px 15px 2px 20px'
			: isIcon
			? '2px 50px 2px 80px'
			: '2px 15px 2px 20px'};

	width: 100%;
	border-radius: 8px;
	border: 1px solid ${({ theme: { colors } }) => colors.solidGrey};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	outline: none;

	::placeholder {
		font: ${({ inputSize }) =>
			inputSize === 'sm'
				? "400 15px/21px 'Poppins'"
				: "400 17px/24px 'Poppins'"};

		color: ${({ theme: { colors } }) => colors.mediumGrey};
	}

	:hover {
		border: 1px solid ${({ theme: { colors } }) => colors.solidGrey};
	}

	:focus {
		border: 1px solid ${({ theme: { colors } }) => colors.lightBlue};
	}
`;
