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
	AngleLeft,
	AngleRight,
	Pen,
} from '../../assets';

type IconProps = {
	icon?: keyof typeof icons;
	color?: Colors;
	showPassword?: boolean;
	checked?: boolean;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
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
	angleleft: AngleLeft,
	angleright: AngleRight,
	pen: Pen,
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
	...rest
}) => {
	const Icon = icons[icon ?? 'user'];
	return (
		<StyledIcon
			color={color}
			showPassword={showPassword}
			checked={checked}
			icon={icon}
		>
			<Icon {...rest} />
		</StyledIcon>
	);
};
