import { PageWrapper, PageHeader } from 'elements';
import { Logo } from 'assets';
import { UserAvatar, UserAvatarProps } from 'components';
import { Link } from 'react-router-dom';

export type MainWrapperProps = UserAvatarProps & {};

export const MainWrapper: React.FC<MainWrapperProps> = ({
	children,
	...rest
}) => {
	return (
		<PageWrapper>
			<PageHeader>
				<Link to='/'>
					<Logo />
				</Link>
				<UserAvatar {...rest} />
			</PageHeader>
			{children}
		</PageWrapper>
	);
};
