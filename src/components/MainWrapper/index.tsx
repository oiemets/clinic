import { PageWrapper, PageHeader } from 'elements';
import { Logo } from 'assets';
import { UserAvatar, UserAvatarProps } from 'components';

export type MainWrapperProps = UserAvatarProps & {};

export const MainWrapper: React.FC<MainWrapperProps> = ({
	children,
	...rest
}) => {
	return (
		<PageWrapper>
			<PageHeader>
				<Logo />
				<UserAvatar {...rest} />
			</PageHeader>
			{children}
		</PageWrapper>
	);
};
