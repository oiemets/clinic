import { MainWrapper, MainWrapperProps } from 'components';
import { useTypedSelector } from 'hooks';
import { userProfile } from 'modules';

type UserWrapperProps = MainWrapperProps & {};

export const UserWrapper: React.FC<UserWrapperProps> = ({ children }) => {
	const user = useTypedSelector(userProfile);

	return (
		<MainWrapper
			avatarTitle={user?.first_name + ' ' + user?.last_name}
			avatarUserRole={user?.role_name}
			avatarPhoto={user?.photo}
		>
			{children}
		</MainWrapper>
	);
};
