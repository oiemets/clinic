import { PatientPageWrapper } from '../components';
import { userProfile } from './selectors';
import { useTypedSelector } from 'hooks';

export const PatientAppointments = () => {
	const profile = useTypedSelector(userProfile);
	return (
		<PatientPageWrapper
			title='My Appointments'
			isActive='appointments'
			avatarTitle={profile?.first_name + ' ' + profile?.first_name}
			avatarUserRole={profile?.role_name}
			avatarPhoto={profile?.photo}
		>
			appointments
		</PatientPageWrapper>
	);
};
