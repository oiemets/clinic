import { Button, Input } from '../../../components';
import { Root, Title, StyledLink, SignInLink, FormContainer } from './style';

export const SignUp = () => {
	return (
		<Root>
			<FormContainer>
				<Title>sign up</Title>
				<Input placeholder={'First Name'} icon='user' />
				<Input placeholder={'Last Name'} icon='user' />
				<Input placeholder={'Email'} icon='email' />
				<Input placeholder={'Password'} icon='lock' iconRight='eyeslash' />
				<Input
					placeholder={'Confirm Password'}
					icon='check'
					iconRight='eyeslash'
				/>

				<Button
					size='xlShort'
					iconRight='arrowRight'
					iconRightSize='lg'
					iconRightColor='white'
					variant='lightBlue'>
					Sign Up
				</Button>

				<SignInLink>
					Already have an account?
					<StyledLink to='/signin'>Sign in</StyledLink>
				</SignInLink>
			</FormContainer>
		</Root>
	);
};
