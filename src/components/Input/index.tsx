import { useState, useCallback } from 'react';
import {
	InputContainer,
	InputBar,
	icons,
	StyledIcon,
	StyledEyeSlashIcon,
} from './style';
import { Colours } from '../../styles';

type InputProps = {
	icon: keyof typeof icons;
	iconColor?: Colours;
	onInput?: (input: string) => void;
	placeholder?: string;
	eyeSlash?: boolean;
};

export const Input: React.FC<InputProps> = ({
	onInput,
	placeholder,
	icon,
	iconColor,
	eyeSlash,
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
	const Icon = icons[icon];

	return (
		<InputContainer>
			<StyledIcon color={iconColor}>
				<Icon />
			</StyledIcon>
			<InputBar
				value={input}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
			/>
			{eyeSlash && <StyledEyeSlashIcon />}
		</InputContainer>
	);
};
