import { RouteObject, useRoutes } from 'react-router-dom';
import { NotFoundPage, HomePage } from 'pages';
import { publicRoutes } from './public';
import { privateRoutes } from './private';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
		children: [...publicRoutes, ...privateRoutes],
	},
	{ path: '*', element: <NotFoundPage /> },
];

export const AppRouter = () => {
	let appRouter = useRoutes(routes);
	return <>{appRouter}</>;
};
