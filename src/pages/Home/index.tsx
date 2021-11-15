import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === '/') {
			navigate('/signup');
		}
	}, [navigate, pathname]);
	return (
		<>
			<Outlet />
		</>
	);
};
