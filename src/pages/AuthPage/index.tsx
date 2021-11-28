import { AuthWrapper } from 'modules';
import { Outlet } from 'react-router-dom';

export const AuthPage: React.FC = () => {
	return (
		<AuthWrapper>
			<Outlet />
		</AuthWrapper>
	);
};
