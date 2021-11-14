import {
	FormTextFieldsWrapper,
	Title,
	AuthFormContainer,
	StyledLink,
	FooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';

export const SignUp = () => {
	return (
		<AuthFormContainer>
			<FormTextFieldsWrapper>
				<Title>sign up</Title>
				<FormTextField icon='user' placeholder='First Name' />
				<FormTextField icon='user' placeholder='Last Name' />
				<FormTextField icon='email' placeholder='Email' />
				<FormTextField icon='lock' placeholder='Password' />
				<FormTextField
					icon='check'
					placeholder='Confirm Password'
					iconRight='eyeslash'
				/>
				<Button iconRight='arrowRight' iconRightColor='white'>
					Sign Up
				</Button>
			</FormTextFieldsWrapper>
			<FooterWrapper>
				Already have an account?
				<StyledLink to='/signin'>Sign in</StyledLink>
			</FooterWrapper>
		</AuthFormContainer>
	);
};
