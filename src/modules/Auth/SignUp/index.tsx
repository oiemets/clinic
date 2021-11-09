import { ButtonResponsive, InputResponsive } from '../../../components';
import { Root, Title, StyledLink, SignInLink, FormContainer } from './style';

export const SignUp = () => {
	return (
		<Root>
			<FormContainer>
				<Title>sign up</Title>
				<InputResponsive placeholder='First Name' icon='user' />
				<InputResponsive placeholder='Last Name' icon='user' />
				<InputResponsive placeholder='Email' icon='email' />
				<InputResponsive
					placeholder='Password'
					icon='lock'
					iconRight='eyeslash'
				/>

				<InputResponsive
					placeholder='Confirm Password'
					icon='check'
					iconRight='eyeslash'
				/>

				<ButtonResponsive
					size='xlShort'
					iconRight='arrowRight'
					iconRightSize='lg'
					iconRightColor='white'
					variant='lightBlue'
				>
					Sign Up
				</ButtonResponsive>

				<SignInLink>
					Already have an account?
					<StyledLink to='/signin'>Sign in</StyledLink>
				</SignInLink>
			</FormContainer>
		</Root>
	);
};
