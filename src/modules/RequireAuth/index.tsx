import { useTypedSelector } from 'hooks';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { isAuth } from './selectors';

export const RequireAuth: React.FC = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = useTypedSelector(isAuth);

	if (!isAuthenticated) {
		return <Navigate to='/signup' state={{ from: location }} />;
	}

	return (
		<>
			{children}
			<Outlet />
		</>
	);
};
