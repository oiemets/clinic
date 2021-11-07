import { Btn, BtnProps, IconPosition } from './styles';
import { Icon, icons, iconSizes } from '../Icon';
import { Colours } from '../../styles';

type ButtonProps = BtnProps & {
	iconLeft?: keyof typeof icons;
	iconRight?: keyof typeof icons;
	iconLeftSize?: keyof typeof iconSizes;
	iconRightSize?: keyof typeof iconSizes;
	iconRightColor?: Colours;
	iconLeftColor?: Colours;
};

export const Button: React.FC<ButtonProps> = ({
	variant,
	titleColor,
	size,
	iconLeft,
	iconRight,
	iconRightColor,
	iconLeftColor,
	iconLeftSize,
	iconRightSize,
	fontLighter,
	border,
	children,
}) => {
	return (
		<Btn
			variant={variant}
			titleColor={titleColor}
			size={size}
			fontLighter={fontLighter}
			border={border}>
			{iconLeft && (
				<IconPosition>
					<Icon icon={iconLeft} color={iconLeftColor} size={iconLeftSize} />
				</IconPosition>
			)}
			{children}
			{iconRight && (
				<IconPosition>
					<Icon icon={iconRight} color={iconRightColor} size={iconRightSize} />
				</IconPosition>
			)}
		</Btn>
	);
};
