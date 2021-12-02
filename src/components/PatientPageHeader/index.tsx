import { HeaderWrapper, HeaderTitle, ButtonsHeaderWrapper } from 'elements';
import { Button, ButtonProps } from '../Button';
import { PROFILE, APPOINTMENTS, RESOLUTIONS } from 'routes';

export type PatientPageHeaderProps = {
	title?: string;
	isActive?: 'profile' | 'appointments' | 'resolutions';
};

const active: ButtonProps = { variant: 'lightBlue', titleColor: 'white' };
const unactive: ButtonProps = {
	variant: 'white',
	titleColor: 'lightBlue',
	fontLighter: true,
};

export const PatientPageHeader: React.FC<PatientPageHeaderProps> = ({
	title,
	isActive,
}) => {
	return (
		<HeaderWrapper>
			<ButtonsHeaderWrapper>
				<Button
					{...(isActive === 'profile' ? active : unactive)}
					linkTo={'/' + PROFILE}
				>
					Profile
				</Button>
				<Button
					{...(isActive === 'appointments' ? active : unactive)}
					linkTo={'/' + APPOINTMENTS}
				>
					Appointments
				</Button>
				<Button
					{...(isActive === 'resolutions' ? active : unactive)}
					linkTo={'/' + RESOLUTIONS}
				>
					Resolutions
				</Button>
			</ButtonsHeaderWrapper>

			<HeaderTitle>{title}</HeaderTitle>
		</HeaderWrapper>
	);
};
