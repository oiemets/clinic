import { UserWrapper } from 'modules';
import { Outlet } from 'react-router-dom';

export const UserPage: React.FC = () => {
	return (
		<UserWrapper>
			<Outlet />
		</UserWrapper>
	);
};
