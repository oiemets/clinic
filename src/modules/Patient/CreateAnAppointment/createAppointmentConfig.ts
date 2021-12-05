import { createAppointmentFormSchema as validationSchema } from 'modules';
import { FormikHelpers, FormikValues } from 'formik';

const initialValues = {
	specialty: '',
	doctorID: '',
	reason: '',
	note: '',
};

export const createAppointmentFormikConfig = (
	onSubmit: (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => void
) => ({
	initialValues,
	validationSchema,
	onSubmit,
});

export const createAppointmentFieldsConfig = {
	specialty: { title: 'Occupation' },
	doctorID: { title: "Doctor's Name" },
	reason: {
		placeholder: 'Place the reason for your visit',
		title: 'Reason for the visit',
	},
	note: {
		placeholder: 'Leave a note if needed',
		title: 'Note',
	},
};
