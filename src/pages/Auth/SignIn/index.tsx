import { AuthPageWrapper, AuthPageBg } from 'elements';
import { SignIn } from 'modules';

export const SignInPage = () => {
	return (
		<AuthPageWrapper>
			<AuthPageBg />
			<SignIn />
		</AuthPageWrapper>
	);
};
