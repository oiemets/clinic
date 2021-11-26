import { MainWrapper, InnerPageWrapper } from 'components';
import {
	PatientPageHeader,
	PatientPageHeaderProps,
} from '../PatientPageHeader';
import { userProfile } from '../../redux';
import { useTypedSelector } from 'hooks';

type PatientPageWrapperProps = PatientPageHeaderProps & {};

export const PatientPageWrapper: React.FC<PatientPageWrapperProps> = ({
	children,
	...rest
}) => {
	const profile = useTypedSelector(userProfile);
	return (
		<MainWrapper
			avatarTitle={profile?.first_name + ' ' + profile?.last_name}
			avatarUserRole={profile?.role_name}
			avatarPhoto={profile?.photo}
		>
			<InnerPageWrapper>
				<PatientPageHeader {...rest} />
				{children}
			</InnerPageWrapper>
		</MainWrapper>
	);
};
