import styled from 'styled-components';
import { Colours } from '../../styles';
import {
	Email,
	User,
	Check,
	Lock,
	EyeSlash,
	ArrowLeft,
	ArrowRight,
} from '../../assets';

type StyledIconProps = {
	color?: Colours;
	size?: keyof typeof iconSizes;
};

type IconProps = StyledIconProps & {
	icon?: keyof typeof icons;
};

export const icons = {
	email: Email,
	user: User,
	check: Check,
	lock: Lock,
	eyeslash: EyeSlash,
	arrowLeft: ArrowLeft,
	arrowRight: ArrowRight,
};

export const iconSizes = {
	sm: {
		width: '16px',
		height: '16px',
	},
	md: {
		width: '20px',
		height: '20px',
	},
	lg: {
		width: '26px',
		height: '26px',
	},
};

export const StyledIcon = styled.span<StyledIconProps>`
	color: ${({ theme: { colours }, color }) => colours[color ?? 'mediumGrey']};

	& svg {
		${({ size }) => iconSizes[size ?? 'lg']}
	}

	& path {
		fill: currentColor;
	}

	@media screen and (max-width: 560px) {
		& svg {
			${({ size }) => iconSizes[size ?? 'sm']}
		}
	}
`;

export const Icon: React.FC<IconProps> = ({ icon, color, size }) => {
	const Icon = icons[icon ?? 'user'];
	return (
		<StyledIcon color={color} size={size}>
			<Icon />
		</StyledIcon>
	);
};
