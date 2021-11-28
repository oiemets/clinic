import { RouteObject, Navigate } from 'react-router-dom';
import {
	SignUpPage,
	SignInPage,
	ResetPasswordPage,
	RestorePasswordPage,
	NotFoundPage,
	AuthPage,
} from 'pages';

export const publicRoutes: RouteObject[] = [
	{
		path: '/',
		element: <AuthPage />,
		children: [
			{ index: true, element: <Navigate to='signup' /> },
			{ path: 'signup', element: <SignUpPage /> },
			{ path: 'signin', element: <SignInPage /> },
			{ path: 'resetpassword', element: <ResetPasswordPage /> },
			{ path: 'restorepassword', element: <RestorePasswordPage /> },
		],
	},
	{ path: '*', element: <NotFoundPage /> },
];
