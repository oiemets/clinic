import { MainWrapper, MainWrapperProps } from 'components';
import { useSelector } from 'react-redux';
import { userProfile } from 'modules';

type UserWrapperProps = MainWrapperProps & {};

export const UserWrapper: React.FC<UserWrapperProps> = ({ children }) => {
	const user = useSelector(userProfile);

	return (
		<MainWrapper
			avatarTitle={user?.firstName + ' ' + user?.lastName}
			avatarUserRole={user?.roleName}
			avatarPhoto={user?.photo}
		>
			{children}
		</MainWrapper>
	);
};
