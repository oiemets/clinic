import { useRoutes } from 'react-router-dom';
import { useClinicRoutes } from './routes';

export const AppRouter = () => {
	const routes = useClinicRoutes();
	const appRouter = useRoutes(routes);
	return <>{appRouter}</>;
};
