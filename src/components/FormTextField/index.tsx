import {
	InputContainer,
	InputBar,
	IconPosition,
	ErrorMessage,
	MainTextFieldWrapper,
	TextFieldTitle,
} from './style';
import { Colors } from 'styles';
import { Icon, icons } from '../Icon';
import { FormikHandlers } from 'formik';
import { useState } from 'react';

export type FormTextFieldProps = {
	icon?: keyof typeof icons;
	iconColor?: Colors;
	onInput?: (input: string) => void;
	iconRight?: keyof typeof icons;
	iconRightColor?: Colors;
	placeholder?: string;
	id?: string;
	type?: React.HTMLInputTypeAttribute;
	name?: string;
	value?: string;
	onChange?: FormikHandlers['handleChange'];
	onBlur?: FormikHandlers['handleBlur'];
	errorMessage?: string | null;
	borderColor?: Colors | null;
	checked?: boolean;
	title?: string;
};

export const FormTextField: React.FC<FormTextFieldProps> = ({
	onInput,
	icon,
	iconColor,
	iconRight,
	iconRightColor,
	errorMessage,
	type,
	checked,
	title,
	...rest
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [isInputEmpty, setIsInputEmpty] = useState(false);

	return (
		<MainTextFieldWrapper>
			{title && <TextFieldTitle>{title}</TextFieldTitle>}
			<InputContainer>
				{icon && (
					<IconPosition left>
						<Icon icon={icon} color={iconColor} checked={checked} />
					</IconPosition>
				)}
				<InputBar
					{...rest}
					isIcon={Boolean(icon)}
					type={iconRight === 'eyeslash' && !showPassword ? 'password' : type}
					onBlurCapture={({ target }) =>
						setIsInputEmpty(target.value.length > 0)
					}
					maxLength={50}
				/>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				{iconRight && (
					<IconPosition right onClick={() => setShowPassword(!showPassword)}>
						<Icon
							icon={iconRight}
							color={iconRightColor}
							showPassword={
								iconRight === 'eyeslash' && showPassword && isInputEmpty
							}
						/>
					</IconPosition>
				)}
			</InputContainer>
		</MainTextFieldWrapper>
	);
};
