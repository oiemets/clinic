import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';
import { useFormikTextFields } from 'hooks';
import { signUpFormikConfig, signUpFieldsConfig } from './signUpFieldsConfig';

export const SignUp = () => {
	const [data, handleSubmit] = useFormikTextFields(
		signUpFormikConfig,
		signUpFieldsConfig
	);

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<Title>sign up</Title>
				{data.map(props => (
					<FormTextField {...props} />
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
