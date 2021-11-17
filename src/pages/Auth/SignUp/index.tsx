import { SignUp } from 'modules';
import { AuthPageWrapper, AuthPageBg } from 'elements';

export const SignUpPage = () => {
	return (
		<>
			<AuthPageWrapper>
				<AuthPageBg />
				<SignUp />
			</AuthPageWrapper>
		</>
	);
};
