import { useSelector } from 'react-redux';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { PatientProfileWrapper, PatientProfileHeader } from './style';
import { Button } from 'components';
import { userProfileSelector } from 'modules';
import { Profile } from './components';

export const PatientProfile = () => {
	const userProfile = useSelector(userProfileSelector);

	return (
		<InnerPageWrapper>
			<PatientProfileHeader>
				<HeaderTitle>Profile</HeaderTitle>
				<Button type='button' iconLeft='pen' iconLeftColor='white'>
					Edit
				</Button>
			</PatientProfileHeader>

			<PatientProfileWrapper>
				<Profile
					photo={userProfile?.photo}
					title={userProfile?.firstName + ' ' + userProfile?.lastName}
					role={userProfile?.roleName}
				/>
			</PatientProfileWrapper>
		</InnerPageWrapper>
	);
};
