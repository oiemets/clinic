import { userRole } from 'modules';
import { useTypedSelector } from 'hooks';
import { publicRoutes } from './public';
import { patient } from './private';

export const useClinicRoutes = () => {
	const user = useTypedSelector(userRole);

	if (user === 'Patient') {
		return [...patient];
	}

	return [...publicRoutes];
};
