import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { PatientProfileWrapper, PatientProfileHeader } from './style';
import { Button } from 'components';
import { signOutRequest } from '../../Auth/AuthProvider';
import { userProfileSelector } from 'modules';
import { Profile } from './components';

export const PatientProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userProfile = useSelector(userProfileSelector);

	const signOut = () => {
		dispatch(signOutRequest());
		navigate('/');
	};

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
			<Button onClick={signOut} iconRightColor='white' variant='lightRed'>
				Sign Out
			</Button>
		</InnerPageWrapper>
	);
};
