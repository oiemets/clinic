import * as Yup from 'yup';

const firstName = Yup.string()
	.max(15, 'Must be 15 characters or less')
	.required('Required');

const lastName = Yup.string()
	.max(20, 'Must be 20 characters or less')
	.required('Required');

const userName = Yup.string()
	.email('Invalid email address')
	.required('Required');

const password = Yup.string()
	.required('Password should not be empty')
	.min(10, 'Password should be at least 10 characters.');

const confirmPassword = Yup.string()
	.required('Password should not be empty')
	.min(10, 'Password should be at least 10 characters.')
	.oneOf([Yup.ref('password')], 'Passwords do not match.');

const reason = Yup.string()
	.required('This field should not be empty')
	.max(50, 'Must be 50 characters or less');

const specialty = Yup.string().required('This field should not be empty');

const doctorID = Yup.string().required('This field should not be empty');

export const signUpValidationSchema = Yup.object({
	firstName,
	lastName,
	userName,
	password,
	confirmPassword,
});

export const signInValidationSchema = Yup.object({ userName, password });

export const restorePasswordValidationSchema = Yup.object({ userName });

export const createAppointmentFormSchema = Yup.object({
	specialty,
	doctorID,
	reason,
});
