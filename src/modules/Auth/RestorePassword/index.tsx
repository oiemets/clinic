import {
	Title,
	AuthFormWrapper,
	FormTextFieldsWrapper,
	TitleWithIconWrapper,
	Text,
} from 'elements';
import { Button, FormTextField, Icon } from 'components';
import { useFormikTextFields } from '../hooks';
import {
	restorePasswordFormikConfig,
	restorePasswordFieldsConfig,
} from './restorePasswordFieldsConfig';

export const RestorePassword = () => {
	const [data, handleSubmit] = useFormikTextFields(
		restorePasswordFormikConfig,
		restorePasswordFieldsConfig
	);
	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<TitleWithIconWrapper>
					<Icon icon='arrowLeft' />
					<Title>Restore Password</Title>
				</TitleWithIconWrapper>
				<Text>
					Please use your email address, and we'll send you the link to reset
					your password
				</Text>
				{data.map(props => (
					<FormTextField {...props} />
				))}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Send Reset Link
				</Button>
			</FormTextFieldsWrapper>
		</AuthFormWrapper>
	);
};
