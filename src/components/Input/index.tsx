import { useState, useCallback } from 'react';
import { InputContainer, InputBar, IconPosition } from './style';
import { Colours } from '../../styles';
import { Icon, icons, iconSizes } from '../Icon';

type InputProps = {
	icon?: keyof typeof icons;
	iconColor?: Colours;
	iconSize?: keyof typeof iconSizes;
	onInput?: (input: string) => void;
	placeholder?: string;

	iconRight?: keyof typeof icons;
	iconRightColor?: Colours;
	iconRightSize?: keyof typeof iconSizes;
};

export const Input: React.FC<InputProps> = ({
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
