import { RouteObject } from 'react-router-dom';
import { RequireAuth } from 'modules';
import { PatientsPage, PatientAppointmentsPage, PatientPage } from 'pages';

const Patient: RouteObject[] = [
	{
		path: '/patient',
		element: <PatientPage />,
		children: [
			{
				path: 'appointments',
				element: <PatientAppointmentsPage />,
			},
		],
	},
];

const Doctor: RouteObject[] = [
	{
		path: 'doctor',
		element: '',
		children: [{ path: 'patients', element: <PatientsPage /> }],
	},
];

export const privateRoutes: RouteObject[] = [
	{
		path: '/',
		element: <RequireAuth />,
		children: [...Doctor, ...Patient],
	},
];
