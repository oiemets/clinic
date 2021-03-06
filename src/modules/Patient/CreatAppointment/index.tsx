import { Button } from 'components';
import { MakeAppointmentHeaderTitle, InnerPageWrapper } from 'elements';
import { SelectDoctor, SelectDay, SelectTimeSlot } from './components';
import { FormikValues } from 'formik';
import {
	CreateAppointmentWrapper,
	CreateAppointmentFormWrapper,
	ButtonWrapper,
	DisabledButton,
} from './style';
import { useSelectDoctor } from 'hooks';
import { useSelector, useDispatch } from 'react-redux';
import {
	getAvailableAppointmentsSelector,
	getSelectedAppointmentTimeSelector,
	isSelectedDoctorIDSelector,
	submitForm,
} from './redux';
import { useNavigate } from 'react-router-dom';

export const CreateAppointment = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const appointments = useSelector(getAvailableAppointmentsSelector);
	const selectedDate = useSelector(getSelectedAppointmentTimeSelector);
	const isSelectedDoctor = useSelector(isSelectedDoctorIDSelector);

	const onSubmit = (values: FormikValues) => {
		const { doctorID, reason, note } = values;
		const data = { doctorID, reason, note, date: selectedDate };
		dispatch(submitForm(data));
		navigate('/appointments');
	};

	const [textFieldsData, selectData, handleSubmit] = useSelectDoctor(onSubmit);

	return (
		<InnerPageWrapper>
			<CreateAppointmentWrapper>
				<MakeAppointmentHeaderTitle>
					Make an appointment
				</MakeAppointmentHeaderTitle>
				<CreateAppointmentFormWrapper onSubmit={handleSubmit}>
					<SelectDoctor
						selectData={selectData}
						textFieldsData={textFieldsData}
					/>
					<SelectDay isActive={isSelectedDoctor} />
					<SelectTimeSlot data={appointments} selectedDate={selectedDate} />
					<ButtonWrapper>
						{selectedDate ? (
							<Button type='submit'>Submit</Button>
						) : (
							<DisabledButton type='button'>Submit</DisabledButton>
						)}
					</ButtonWrapper>
				</CreateAppointmentFormWrapper>
			</CreateAppointmentWrapper>
		</InnerPageWrapper>
	);
};

export * from './components';
export * from './redux';
