import { useState } from 'react';
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
	UserIcon,
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
	const [isImgLoaded, setIsImgLoaded] = useState(true);
	const onError = () => setIsImgLoaded(false);

	return (
		<CardWrapper>
			<VerticalDotsOptions />

			<DoctorAvatarWrapper>
				{isImgLoaded ? (
					<DoctorAvatar src={photo} alt='doctor' onError={onError} />
				) : (
					<UserIcon />
				)}
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
