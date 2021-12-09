import { InnerPageWrapper } from 'elements';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, PatientPageHeader } from 'components';
import { signOutRequest } from '../../Auth/AuthProvider';

export const PatientProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signOut = () => {
		dispatch(signOutRequest());
		navigate('/');
	};

	return (
		<InnerPageWrapper>
			<PatientPageHeader isActive='profile' />
			<Button onClick={signOut} iconRightColor='white' variant='lightRed'>
				Sign Out
			</Button>
			profile
		</InnerPageWrapper>
	);
};
