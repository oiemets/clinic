import { RouteObject, Navigate } from 'react-router-dom';
import {
	PatientsPage,
	PatientAppointmentsPage,
	PatientProfilePage,
	PatientResolutionsPage,
	UserPage,
	NotFoundPage,
} from 'pages';

export const patient: RouteObject[] = [
	{
		path: '/',
		element: <UserPage />,
		children: [
			{
				path: 'appointments',
				element: <PatientAppointmentsPage />,
			},
			{
				path: 'profile',
				element: <PatientProfilePage />,
			},
			{
				path: 'resolutions',
				element: <PatientResolutionsPage />,
			},
		],
	},
	{ index: true, element: <Navigate to='appointments' /> },
	{ path: '*', element: <NotFoundPage /> },
];

export const doctor: RouteObject[] = [
	{
		path: 'patients',
		element: <PatientsPage />,
	},
];
