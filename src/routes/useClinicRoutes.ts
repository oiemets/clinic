import { userRole } from 'modules';
import { useSelector } from 'react-redux';
import { publicRoutes } from './public';
import { patient } from './private';

export const useClinicRoutes = () => {
	const user = useSelector(userRole);

	if (user === 'Patient') {
		return [...patient];
	}

	return [...publicRoutes];
};
