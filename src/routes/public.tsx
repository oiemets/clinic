import { RouteObject, Navigate } from 'react-router-dom';
import {
	ROOT,
	SIGN_UP,
	SIGN_IN,
	RESET_PASSWORD,
	RESTORE_PASSWORD,
} from './pageRoutes';
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
		path: ROOT,
		element: <AuthPage />,
		children: [
			{ index: true, element: <Navigate to={SIGN_UP} /> },
			{ path: SIGN_UP, element: <SignUpPage /> },
			{ path: SIGN_IN, element: <SignInPage /> },
			{ path: RESET_PASSWORD, element: <ResetPasswordPage /> },
			{ path: RESTORE_PASSWORD, element: <RestorePasswordPage /> },
		],
	},
	{ path: '*', element: <NotFoundPage /> },
];
