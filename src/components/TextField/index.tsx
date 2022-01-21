import {
	TextFieldWrapper,
	TextFieldTitle,
	TextFieldContainer,
	TextFieldInput,
	ErrorMessage,
} from './style';

import React from 'react';

type TextFieldProps = {
	title?: string;
	errorMessage?: string | null;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	(props, ref) => (
		<TextFieldWrapper>
			{props.title && <TextFieldTitle>{props.title}</TextFieldTitle>}
			<TextFieldContainer>
				<TextFieldInput ref={ref} {...props} isError={!!props.errorMessage} />
				{props.errorMessage && (
					<ErrorMessage>{props.errorMessage}</ErrorMessage>
				)}
			</TextFieldContainer>
		</TextFieldWrapper>
	)
);
