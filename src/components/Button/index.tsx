import { Btn, BtnProps, IconPosition } from './styles';
import { Icon, icons } from '../Icon';
import { Colors } from '../../styles';

export type ButtonProps = BtnProps & {
	iconLeft?: keyof typeof icons;
	iconRight?: keyof typeof icons;
	iconRightColor?: Colors;
	iconLeftColor?: Colors;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
	variant,
	titleColor,
	iconLeft,
	iconRight,
	iconRightColor,
	iconLeftColor,
	fontLighter,
	border,
	children,
	onClick,
}) => {
	return (
		<Btn
			variant={variant}
			titleColor={titleColor}
			fontLighter={fontLighter}
			border={border}
			onClick={onClick}
		>
			{iconLeft && (
				<IconPosition>
					<Icon icon={iconLeft} color={iconLeftColor} />
				</IconPosition>
			)}
			{children}
			{iconRight && (
				<IconPosition>
					<Icon icon={iconRight} color={iconRightColor} />
				</IconPosition>
			)}
		</Btn>
	);
};
