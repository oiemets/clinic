import { AuthPageWrapper, AuthPageBg } from 'elements';

export const AuthWrapper: React.FC = ({ children }) => {
	return (
		<AuthPageWrapper>
			<AuthPageBg />
			{children}
		</AuthPageWrapper>
	);
};
