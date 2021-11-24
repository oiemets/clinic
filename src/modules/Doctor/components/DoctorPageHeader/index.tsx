import { HeaderWrapper, HeaderTitle, ButtonsHeaderWrapper } from 'elements';
import { Button } from 'components';

export const DoctorPageHeader = () => {
	return (
		<HeaderWrapper>
			<ButtonsHeaderWrapper>
				<Button>Patients</Button>
				<Button variant='white' titleColor='lightBlue' fontLighter>
					Resolutions
				</Button>
			</ButtonsHeaderWrapper>

			<HeaderTitle>My Patients</HeaderTitle>
		</HeaderWrapper>
	);
};
