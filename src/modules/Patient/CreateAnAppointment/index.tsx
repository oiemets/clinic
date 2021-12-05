import { InnerPageWrapper, Button } from 'components';
import { HeaderTitle } from 'elements';
import { SelectDoctor, SelectDay } from './components';
import {
	CreateAnAppointmentWrapper,
	CreateAnAppointmentFormWrapper,
	ButtonWrapper,
} from './style';
import { FormikValues } from 'formik';
import { useFormikTextFields } from 'hooks';
import {
	createAppointmentFieldsConfig,
	createAppointmentFormikConfig,
} from './createAppointmentConfig';
import { useSelectDoctor } from './components/SelectDoctor/useSelectDoctor';

export const CreateAnAppointment = () => {
	const onSubmit = (values: FormikValues) => console.log(values);

	const [data, handleSubmit, handleChange] = useFormikTextFields(
		createAppointmentFormikConfig(onSubmit),
		createAppointmentFieldsConfig
	);

	const [specialty, doctorID] = useSelectDoctor(handleChange);

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
					<SelectDay />
					<ButtonWrapper>
						<Button type='submit'>Submit</Button>
					</ButtonWrapper>
				</CreateAnAppointmentFormWrapper>
			</CreateAnAppointmentWrapper>
		</InnerPageWrapper>
	);
};
