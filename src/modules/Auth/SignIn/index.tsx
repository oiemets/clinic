import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';

export const SignIn = () => {
	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper>
				<Title>sign in</Title>
				<FormTextField icon='email' placeholder='Email' />
				<FormTextField icon='lock' placeholder='Password' />
				<Button iconRight='arrowRight' iconRightColor='white'>
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
