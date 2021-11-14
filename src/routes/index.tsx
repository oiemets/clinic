import { RouteObject, useRoutes } from 'react-router-dom';
import {
	SignUpPage,
	SignInPage,
	NotFoundPage,
	ResetPasswordPage,
	RestorePasswordPage,
} from 'pages';

const routes: RouteObject[] = [
	{ path: '/', element: <SignUpPage /> },
	{ path: '/signin', element: <SignInPage /> },
	{ path: '/resetpassword', element: <ResetPasswordPage /> },
	{ path: '/restorepassword', element: <RestorePasswordPage /> },

	{ path: '*', element: <NotFoundPage /> },
];

export const AppRouter = () => {
	let appRouter = useRoutes(routes);
	return <>{appRouter}</>;
};
