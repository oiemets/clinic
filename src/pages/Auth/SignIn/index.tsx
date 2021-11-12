import { PageWrapper, AuthPagesBg } from 'elements';
import { SignIn } from 'modules';

export const SignInPage = () => {
	return (
		<PageWrapper>
			<AuthPagesBg />
			<SignIn />
		</PageWrapper>
	);
};
