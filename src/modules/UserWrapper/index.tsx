import { MainWrapper, MainWrapperProps } from 'components';
import { useSelector } from 'react-redux';
import { userProfileSelector } from 'modules';

type UserWrapperProps = MainWrapperProps & {};

export const UserWrapper: React.FC<UserWrapperProps> = ({ children }) => {
	const user = useSelector(userProfileSelector);

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
