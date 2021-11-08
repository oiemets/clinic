import styled from 'styled-components';
import { Colors } from '../../styles';
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
	color?: Colors;
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
	color: ${({ theme: { colors }, color }) => colors[color ?? 'mediumGrey']};

	& svg {
		${({ size }) => iconSizes[size ?? 'lg']}
	}

	& path {
		fill: currentColor;
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
