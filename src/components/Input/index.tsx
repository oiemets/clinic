import { useState, useCallback } from 'react';
import { InputContainer, InputBar, IconPosition, InputBarProps } from './style';
import { Colors } from '../../styles';
import { Icon, icons, iconSizes } from '../Icon';

export type InputProps = {
	inputSize?: InputBarProps['inputSize'];
	icon?: keyof typeof icons;
	iconColor?: Colors;
	iconSize?: keyof typeof iconSizes;
	onInput?: (input: string) => void;
	placeholder?: string;
	iconRight?: keyof typeof icons;
	iconRightColor?: Colors;
	iconRightSize?: keyof typeof iconSizes;
};

export const Input: React.FC<InputProps> = ({
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
	const [input, setInput] = useState('');

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (input !== '' && e.key === 'Enter') {
				onInput?.(input);
			}
		},
		[onInput, input]
	);

	const onChange = useCallback(e => setInput(e.target.value), []);

	const isIcon = icon ? true : false;

	return (
		<InputContainer>
			{icon && (
				<IconPosition position='left'>
					<Icon icon={icon} color={iconColor} size={iconSize} />
				</IconPosition>
			)}
			<InputBar
				inputSize={inputSize}
				value={input}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				isIcon={isIcon}
			/>
			{iconRight && (
				<IconPosition position='right'>
					<Icon icon={iconRight} color={iconRightColor} size={iconRightSize} />
				</IconPosition>
			)}
		</InputContainer>
	);
};
