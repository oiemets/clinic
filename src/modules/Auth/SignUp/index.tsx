import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';

export const SignUp = () => {
	return (
		<AuthFormWrapper>
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
			<AuthFooterWrapper>
				Already have an account?
				<StyledLink to='/signin'>Sign in</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
