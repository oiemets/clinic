import { PageWrapper, PageHeader } from 'elements';
import { Logo } from 'assets';
import { UserAvatar } from 'components';

export const MainWrapper: React.FC = ({ children }) => {
	return (
		<PageWrapper>
			<PageHeader>
				<Logo />
				<UserAvatar />
			</PageHeader>
			{children}
		</PageWrapper>
	);
};
