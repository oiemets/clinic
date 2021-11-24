import { RouteObject } from 'react-router-dom';

import {
	SignUpPage,
	SignInPage,
	ResetPasswordPage,
	RestorePasswordPage,
} from 'pages';

export const publicRoutes: RouteObject[] = [
	{ path: 'signup', element: <SignUpPage /> },
	{ path: 'signin', element: <SignInPage /> },
	{ path: 'resetpassword', element: <ResetPasswordPage /> },
	{ path: 'restorepassword', element: <RestorePasswordPage /> },
];
