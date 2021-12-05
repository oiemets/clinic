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
	Plus,
} from '../../assets';

type IconProps = {
	icon?: keyof typeof icons;
	color?: Colors;
	showPassword?: boolean;
	checked?: boolean;
};

export const icons = {
	email: Email,
	user: User,
	check: Check,
	lock: Lock,
	eyeslash: EyeSlash,
	arrowLeft: ArrowLeft,
	arrowRight: ArrowRight,
	plus: Plus,
};

export const StyledIcon = styled.div<IconProps>`
	color: ${({ theme: { colors }, color, showPassword, checked, icon }) => {
		if (showPassword) return colors.lightRed;
		if (icon === 'check' && checked) return colors.green;
		return colors[color ?? 'mediumGrey'];
	}};

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

export const Icon: React.FC<IconProps> = ({
	icon,
	color,
	showPassword,
	checked,
}) => {
	const Icon = icons[icon ?? 'user'];
	return (
		<StyledIcon
			color={color}
			showPassword={showPassword}
			checked={checked}
			icon={icon}
		>
			<Icon />
		</StyledIcon>
	);
};
