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
	showPassword?: boolean;
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

export const StyledIcon = styled.div<StyledIconProps>`
	color: ${({ theme: { colors }, color, showPassword }) =>
		showPassword ? colors.lightRed : colors[color ?? 'mediumGrey']};

	line-height: 0;
	& svg {
		width: 26px;
		height: 26px;
	}

	& path {
		fill: currentColor;
	}

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		& svg {
			width: 16px;
			height: 16px;
		}
	}
`;

export const Icon: React.FC<IconProps> = ({ icon, color, showPassword }) => {
	const Icon = icons[icon ?? 'user'];
	return (
		<StyledIcon color={color} showPassword={showPassword}>
			<Icon />
		</StyledIcon>
	);
};
