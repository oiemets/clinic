import { EmptyState } from 'assets';
import {
	EmptyStateWrapper,
	EmptyStateText,
	EmptyStateTextWrapper,
} from './style';

export const PatientsEmptyState = () => {
	return (
		<EmptyStateWrapper>
			<EmptyState />
			<EmptyStateTextWrapper>
				<EmptyStateText>You have no patients yet.</EmptyStateText>
				<EmptyStateText>
					To create a patient profile, please contact your administrator.
				</EmptyStateText>
			</EmptyStateTextWrapper>
		</EmptyStateWrapper>
	);
};
