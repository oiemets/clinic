import {
	Title,
	AuthFormContainer,
	FormTextFieldsContainer,
	TitleWithIconWrapper,
	Text,
	StyledLink,
} from 'elements';

import { Icon } from 'components';

export const ResetPassword = () => {
	return (
		<AuthFormContainer>
			<FormTextFieldsContainer>
				<TitleWithIconWrapper>
					<Icon icon='arrowLeft' />
					<Title>Restore Password</Title>
				</TitleWithIconWrapper>
				<Text>
					An email has been sent to{' '}
					<StyledLink to=''>example@exam.com</StyledLink>. Check your inbox, and
					click the reset link provided.
				</Text>
			</FormTextFieldsContainer>
		</AuthFormContainer>
	);
};
