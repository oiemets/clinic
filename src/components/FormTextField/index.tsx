import { useState, useCallback } from 'react';
import { InputContainer, InputBar, IconPosition } from './style';
import { Colors } from '../../styles';
import { Icon, icons } from '../Icon';

export type FormTextFieldProps = {
	icon?: keyof typeof icons;
	iconColor?: Colors;
	onInput?: (input: string) => void;
	placeholder?: string;
	iconRight?: keyof typeof icons;
	iconRightColor?: Colors;
};

export const FormTextField: React.FC<FormTextFieldProps> = ({
	onInput,
	placeholder,
	icon,
	iconColor,
	iconRight,
	iconRightColor,
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

	return (
		<InputContainer>
			{icon && (
				<IconPosition left>
					<Icon icon={icon} color={iconColor} />
				</IconPosition>
			)}
			<InputBar
				value={input}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				isIcon={Boolean(icon)}
			/>
			{iconRight && (
				<IconPosition right>
					<Icon icon={iconRight} color={iconRightColor} />
				</IconPosition>
			)}
		</InputContainer>
	);
};
