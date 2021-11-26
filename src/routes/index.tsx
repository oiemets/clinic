import { RouteObject, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';

const routes: RouteObject[] = [...publicRoutes, ...privateRoutes];

export const AppRouter = () => {
	let appRouter = useRoutes(routes);
	return <>{appRouter}</>;
};
