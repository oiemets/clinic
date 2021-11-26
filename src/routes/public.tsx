import { RouteObject } from 'react-router-dom';

import {
	SignUpPage,
	SignInPage,
	ResetPasswordPage,
	RestorePasswordPage,
	NotFoundPage,
} from 'pages';

export const publicRoutes: RouteObject[] = [
	{ index: true, element: <SignUpPage /> },
	{ path: 'signin', element: <SignInPage /> },
	{ path: 'resetpassword', element: <ResetPasswordPage /> },
	{ path: 'restorepassword', element: <RestorePasswordPage /> },
	{ path: '*', element: <NotFoundPage /> },
];
