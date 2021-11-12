import {
	FormTextFieldsContainer,
	Title,
	AuthFormContainer,
	StyledLink,
	FooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';

export const SignIn = () => {
	return (
		<AuthFormContainer>
			<FormTextFieldsContainer>
				<Title>sign in</Title>
				<FormTextField icon='email' placeholder='Email' />
				<FormTextField icon='lock' placeholder='Password' />
				<Button iconRight='arrowRight' iconRightColor='white'>
					Sign In
				</Button>
				<StyledLink to='restorepassword'>Forgot Password?</StyledLink>
			</FormTextFieldsContainer>
			<FooterWrapper>
				Don't have an account?
				<StyledLink to='/'>Sign up</StyledLink>
			</FooterWrapper>
		</AuthFormContainer>
	);
};