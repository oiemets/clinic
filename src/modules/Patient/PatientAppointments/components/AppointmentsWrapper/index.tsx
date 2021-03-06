import { PatientPageHeader, Button } from 'components';
import { InnerMainSection, HeaderTitle, InnerPageWrapper } from 'elements';
import { CREATE_APPOINTMENT } from 'routes';
import {
	AppointmentsMainSectionHeader,
	CreateAppointmentButtonWrapper,
} from './style';

export const AppointmentsWrapper: React.FC = ({ children }) => {
	return (
		<InnerPageWrapper>
			<PatientPageHeader isActive='appointments' />
			<InnerMainSection>
				<AppointmentsMainSectionHeader>
					<HeaderTitle>My Appointments</HeaderTitle>
					<CreateAppointmentButtonWrapper>
						<Button
							linkTo={'/' + CREATE_APPOINTMENT}
							iconLeft='plus'
							iconLeftColor='white'
						>
							Create an appointment
						</Button>
					</CreateAppointmentButtonWrapper>
				</AppointmentsMainSectionHeader>
				{children}
			</InnerMainSection>
		</InnerPageWrapper>
	);
};
