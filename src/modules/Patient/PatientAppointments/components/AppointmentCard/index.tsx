import {
	CardWrapper,
	DoctorAvatar,
	DoctorAvatarWrapper,
	DoctorAvatarTitleWrapper,
	DoctorAvatarTitle,
	DoctorAvatarRole,
	InfoWrapper,
	TimeWrapper,
	TimeTitle,
	ReasonWrapper,
	ReasonTitle,
	ClockIcon,
	HeartIcon,
	VerticalDotsOptions,
} from './style';
import { Appointment } from 'types';
import { appointmentCardDateFormat } from 'utils';

type AppointmentCardProps = Partial<Appointment> &
	Partial<Appointment['doctor']>;

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
	firstName = '',
	lastName = '',
	reason,
	photo,
	specializationName = '',
	visitDate = '',
}) => {
	return (
		<CardWrapper>
			<VerticalDotsOptions />

			<DoctorAvatarWrapper>
				<DoctorAvatar src={photo} alt='doctor' />
				<DoctorAvatarTitleWrapper>
					<DoctorAvatarTitle>{firstName + ' ' + lastName}</DoctorAvatarTitle>
					<DoctorAvatarRole>{specializationName}</DoctorAvatarRole>
				</DoctorAvatarTitleWrapper>
			</DoctorAvatarWrapper>

			<InfoWrapper>
				<TimeWrapper>
					<ClockIcon />
					<TimeTitle>{appointmentCardDateFormat(visitDate)}</TimeTitle>
				</TimeWrapper>
				<ReasonWrapper>
					<HeartIcon />
					<ReasonTitle>{reason}</ReasonTitle>
				</ReasonWrapper>
			</InfoWrapper>
		</CardWrapper>
	);
};
