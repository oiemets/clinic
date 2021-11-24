import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { userRole } from './selectors';
import { useTypedSelector } from 'hooks';

export const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const user = useTypedSelector(userRole);

	useEffect(() => {
		if (user === 'Patient') {
			navigate('patient/appointments');
		}
	}, [navigate, pathname, user]);

	return (
		<>
			<Outlet />
		</>
	);
};
