import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';
import { useFormikTextFields } from './useFormikTextFields';
import { formikConfig, signUpFieldsConfig } from './signUpFieldsConfig';

export const SignUp = () => {
	const [data, handleSubmit] = useFormikTextFields(
		formikConfig,
		signUpFieldsConfig
	);

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<Title>sign up</Title>
				{data.map(prop => (
					<FormTextField {...prop} />
				))}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Sign Up
				</Button>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Already have an account?
				<StyledLink to='/signin'>Sign in</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
