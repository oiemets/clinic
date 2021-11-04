import { Btn, BtnProps } from './styles';
import { ArrowRight, ArrowLeft } from '../../assets/icons';

type ButtonProps = BtnProps & {
	arrow?: 'right' | 'left';
};

export const Button: React.FC<ButtonProps> = ({
	variant,
	titleColor,
	size,
	arrow,
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
			{arrow === 'right' && <ArrowRight />}
			{children}
			{arrow === 'left' && <ArrowLeft />}
		</Btn>
	);
};
