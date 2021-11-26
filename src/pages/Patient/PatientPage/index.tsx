import { Outlet } from 'react-router-dom';

export const PatientPage: React.FC = ({ children }) => {
	return (
		<>
			{children}
			<Outlet />
		</>
	);
};
