import { PageWrapper, PageHeader } from 'elements';
import { Logo } from 'assets';
import { UserAvatar, UserAvatarProps, DropDownMenu } from 'components';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOutRequest } from 'modules';

export type MainWrapperProps = UserAvatarProps & {};

export const MainWrapper: React.FC<MainWrapperProps> = ({
	children,
	...rest
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signOut = () => {
		dispatch(signOutRequest());
		navigate('/');
	};
	return (
		<PageWrapper>
			<PageHeader>
				<Link to='/'>
					<Logo />
				</Link>
				<DropDownMenu
					menuItems={[
						{
							label: 'User Profile',
							linkTo: 'profile',
						},
						{
							label: 'Sign Out',
							onClick: signOut,
						},
					]}
					element={<UserAvatar {...rest} />}
				/>
			</PageHeader>
			{children}
		</PageWrapper>
	);
};
