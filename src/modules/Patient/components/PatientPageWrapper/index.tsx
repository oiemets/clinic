import { MainWrapper, InnerPageWrapper, MainWrapperProps } from 'components';
import {
	PatientPageHeader,
	PatientPageHeaderProps,
} from '../PatientPageHeader';

type PatientPageWrapperProps = PatientPageHeaderProps & MainWrapperProps;

export const PatientPageWrapper: React.FC<PatientPageWrapperProps> = ({
	children,
	avatarPhoto,
	avatarTitle,
	avatarUserRole,
	...rest
}) => {
	return (
		<MainWrapper
			avatarPhoto={avatarPhoto}
			avatarTitle={avatarTitle}
			avatarUserRole={avatarUserRole}
		>
			<InnerPageWrapper>
				<PatientPageHeader {...rest} />
				{children}
			</InnerPageWrapper>
		</MainWrapper>
	);
};
