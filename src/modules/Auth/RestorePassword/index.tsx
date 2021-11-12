import {
	Title,
	AuthFormContainer,
	FormTextFieldsContainer,
	TitleWithIconWrapper,
	Text,
} from 'elements';
import { Button, FormTextField, Icon } from 'components';

export const RestorePassword = () => {
	return (
		<AuthFormContainer>
			<FormTextFieldsContainer>
				<TitleWithIconWrapper>
					<Icon icon='arrowLeft' />
					<Title>Restore Password</Title>
				</TitleWithIconWrapper>
				<Text>
					Please use your email address, and we'll send you the link to reset
					your password
				</Text>
				<FormTextField placeholder='Email' icon='email' />
				<Button iconRight='arrowRight' iconRightColor='white'>
					Send Reset Link
				</Button>
			</FormTextFieldsContainer>
		</AuthFormContainer>
	);
};
