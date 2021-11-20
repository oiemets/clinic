import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';
import { useFormikTextFields } from '../hooks';
import { signInFormikConfig, signInFieldsConfig } from './signInFieldsConfig';

export const SignIn = () => {
	const [data, handleSubmit] = useFormikTextFields(
		signInFormikConfig,
		signInFieldsConfig
	);

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<Title>sign in</Title>
				{data.map(props => (
					<FormTextField {...props} />
				))}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Sign In
				</Button>
				<StyledLink to='/restorepassword'>Forgot Password?</StyledLink>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Don't have an account?
				<StyledLink to='/signup'>Sign up</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
