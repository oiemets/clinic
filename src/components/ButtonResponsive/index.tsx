import { Button, ButtonProps } from '../Button';
import { useMediaQuery } from 'react-responsive';

type ButtonResponsiveProps = ButtonProps & {};

export const ButtonResponsive: React.FC<ButtonResponsiveProps> = ({
	iconLeft,
	iconLeftColor,
	iconLeftSize,
	iconRight,
	iconRightColor,
	iconRightSize,
	variant,
	titleColor,
	border,
	size,
	fontLighter,
	children,
}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 560px)' });

	return (
		<>
			{isMobile ? (
				<Button
					iconLeft={iconLeft}
					iconLeftColor={iconLeftColor}
					iconLeftSize={'sm'}
					iconRight={iconRight}
					iconRightColor={iconRightColor}
					iconRightSize={'sm'}
					fontLighter
					variant={variant}
					titleColor={titleColor}
					border={border}
					size={'sm'}
				>
					{children}
				</Button>
			) : (
				<Button
					variant={variant}
					titleColor={titleColor}
					border={border}
					size={size}
					fontLighter={fontLighter}
					iconLeft={iconLeft}
					iconLeftColor={iconLeftColor}
					iconLeftSize={iconLeftSize}
					iconRight={iconRight}
					iconRightColor={iconRightColor}
					iconRightSize={iconRightSize}
				>
					{children}
				</Button>
			)}
		</>
	);
};
