import { useFormikTextFields, useSelectData } from 'hooks';
import {
	createAppointmentFieldsConfig,
	createAppointmentFormikConfig,
} from 'modules';
import { FormikValues } from 'formik';

type UseSelectDoctorProps = {
	onSubmit: (values: FormikValues) => void;
};

type UseSelectorReturnType = [
	any[],
	any[],
	(e?: React.FormEvent<HTMLFormElement> | undefined) => void
];

export const useSelectDoctor = (
	onSubmit: UseSelectDoctorProps['onSubmit']
): UseSelectorReturnType => {
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

	return [textFieldsData, selectData, handleSubmit];
};
