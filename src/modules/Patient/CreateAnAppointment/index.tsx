import { Button } from 'components';
import { HeaderTitle, InnerPageWrapper } from 'elements';
import { SelectDoctor, SelectDay, SelectTimeSlot } from './components';
import {
	CreateAnAppointmentWrapper,
	CreateAnAppointmentFormWrapper,
	ButtonWrapper,
	DisabledButton,
} from './style';
import { useFormikTextFields, useSelectData } from 'hooks';
import {
	createAppointmentFieldsConfig,
	createAppointmentFormikConfig,
} from './createAppointmentConfig';
import { useSelector } from 'react-redux';
import {
	getAvailableAppointmentsSelector,
	getSelectedAppointmentTimeSelector,
	isSelectedDoctorIDSelector,
} from 'modules';

export const CreateAnAppointment = () => {
	const appointments = useSelector(getAvailableAppointmentsSelector);

	const selectedDate = useSelector(getSelectedAppointmentTimeSelector);
	const isSelectedDoctor = useSelector(isSelectedDoctorIDSelector);

	const onSubmit = (values: any) => {
		const { doctorID, reason, note } = values;
		const result = { doctorID, reason, note, date: selectedDate };
		console.log(result);
	};

	const [data, handleSubmit, handleChange] = useFormikTextFields(
		createAppointmentFormikConfig(onSubmit),
		createAppointmentFieldsConfig
	);

	const [specialty, doctorID] = useSelectData(handleChange);

	const [specialtyFormik, doctorIDFormik, reason, note] = data;
	const textFieldsData = [reason, note];
	const selectData = [
		{ ...specialtyFormik, ...specialty },
		{ ...doctorIDFormik, ...doctorID },
	];

	return (
		<InnerPageWrapper>
			<CreateAnAppointmentWrapper>
				<HeaderTitle>Make an appointment</HeaderTitle>
				<CreateAnAppointmentFormWrapper onSubmit={handleSubmit}>
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
				</CreateAnAppointmentFormWrapper>
			</CreateAnAppointmentWrapper>
		</InnerPageWrapper>
	);
};
