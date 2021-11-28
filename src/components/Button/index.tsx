import { Btn, BtnProps, IconPosition } from './styles';
import { Icon, icons } from '../Icon';
import { Colors } from '../../styles';
import { Link } from 'react-router-dom';

export type ButtonProps = BtnProps & {
	iconLeft?: keyof typeof icons;
	iconRight?: keyof typeof icons;
	iconRightColor?: Colors;
	iconLeftColor?: Colors;
	onClick?: () => void;
	type?: 'submit' | 'reset';
	linkTo?: string;
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
	type,
	linkTo,
}) => {
	const RenderButton = (
		<Btn
			variant={variant}
			titleColor={titleColor}
			fontLighter={fontLighter}
			border={border}
			onClick={onClick}
			type={type}
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

	return (
		<>{linkTo ? <Link to={linkTo ?? ''}>{RenderButton}</Link> : RenderButton}</>
	);
};
