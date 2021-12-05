import { createAppointmentFormSchema as validationSchema } from 'modules';
import { FormikHelpers, FormikValues } from 'formik';

const initialValues = {
	reasonForTheVisit: '',
	note: '',
};

export const selectDoctorFormikConfig = (
	onSubmit: (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => void
) => ({
	initialValues,
	validationSchema,
	onSubmit,
});

export const selectDoctorFieldsConfig = {
	reasonForTheVisit: {
		placeholder: 'Place the reason for your visit',
		title: 'Reason for the visit',
	},
	note: {
		placeholder: 'Leave a note if needed',
		title: 'Note',
	},
};
