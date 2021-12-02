import { MainWrapper, InnerPageWrapper } from 'components';
import {
	DoctorPageHeader,
	// PatientsEmptyState,
	PatientsLoader,
} from '../components';
import { InnerMainSection } from 'elements';

export const Patients = () => {
	return (
		<MainWrapper>
			<InnerPageWrapper>
				<DoctorPageHeader />
				<InnerMainSection>
					{/* <PatientsEmptyState /> */}
					<PatientsLoader />
				</InnerMainSection>
			</InnerPageWrapper>
		</MainWrapper>
	);
};

export * from './PatientsSlice';
