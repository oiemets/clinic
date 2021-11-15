import { SignUp } from 'modules';
import { PageWrapper, AuthPagesBg } from 'elements';

export const SignUpPage = () => {
	return (
		<>
			<PageWrapper>
				<AuthPagesBg />
				<SignUp />
			</PageWrapper>
		</>
	);
};
