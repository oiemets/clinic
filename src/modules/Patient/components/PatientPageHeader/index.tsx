import { HeaderWrapper, HeaderTitle, ButtonsHeaderWrapper } from 'elements';
import { Button, ButtonProps } from 'components';

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
					linkTo='/profile'
				>
					Profile
				</Button>
				<Button
					{...(isActive === 'appointments' ? active : unactive)}
					linkTo='/appointments'
				>
					Appointments
				</Button>
				<Button
					{...(isActive === 'resolutions' ? active : unactive)}
					linkTo='/resolutions'
				>
					Resolutions
				</Button>
			</ButtonsHeaderWrapper>

			<HeaderTitle>{title}</HeaderTitle>
		</HeaderWrapper>
	);
};
