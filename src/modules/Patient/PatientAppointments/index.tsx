import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAppointments, getAllPatientAppointmentsSelector } from 'modules';
import { AppointmentsWrapper, AppointmentCard } from './components';
import { CardsContainer } from './style';

export const PatientAppointments = () => {
	const dispatch = useDispatch();
	const appointments = useSelector(getAllPatientAppointmentsSelector);

	useEffect(() => {
		dispatch(getAllAppointments());
	}, [dispatch]);

	return (
		<AppointmentsWrapper>
			<CardsContainer>
				{appointments?.map((props, index) => (
					<AppointmentCard key={new Date() + '-' + index} {...props} />
				))}
			</CardsContainer>
		</AppointmentsWrapper>
	);
};

export * from './redux';
