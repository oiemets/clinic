import { useMediaQuery } from 'react-responsive';
import { Input, InputProps } from '../Input';

type InputResponsiveProps = InputProps & {};

export const InputResponsive: React.FC<InputResponsiveProps> = ({
	inputSize,
	onInput,
	placeholder,
	icon,
	iconColor,
	iconSize,
	iconRight,
	iconRightColor,
	iconRightSize,
}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 560px)' });
	return (
		<>
			{isMobile ? (
				<Input
					inputSize='sm'
					onInput={onInput}
					placeholder={placeholder}
					icon={icon}
					iconColor={iconColor}
					iconSize='sm'
					iconRight={iconRight}
					iconRightColor={iconRightColor}
					iconRightSize='sm'
				/>
			) : (
				<Input
					inputSize={inputSize}
					onInput={onInput}
					placeholder={placeholder}
					icon={icon}
					iconColor={iconColor}
					iconSize={iconSize}
					iconRight={iconRight}
					iconRightColor={iconRightColor}
					iconRightSize={iconRightSize}
				/>
			)}
		</>
	);
};
