import { HeaderWrapper, HeaderTitle, ButtonsWrapper } from './style';
import { Button } from 'components';

export const DoctorPageHeader = () => {
	return (
		<HeaderWrapper>
			<ButtonsWrapper>
				<Button>Patients</Button>
				<Button variant='white' titleColor='lightBlue' fontLighter>
					Resolutions
				</Button>
			</ButtonsWrapper>

			<HeaderTitle>My Patients</HeaderTitle>
		</HeaderWrapper>
	);
};
