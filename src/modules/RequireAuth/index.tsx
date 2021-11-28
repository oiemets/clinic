import { useTypedSelector } from 'hooks';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { isAuthed } from 'modules';

export const RequireAuth: React.FC = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = useTypedSelector(isAuthed);

	if (!isAuthenticated) {
		return <Navigate to='/' state={{ from: location }} />;
	}

	return (
		<>
			{children}
			<Outlet />
		</>
	);
};
