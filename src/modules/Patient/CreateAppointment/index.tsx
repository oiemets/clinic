import { useEffect, useCallback } from 'react';
import { MakeAppointmentHeaderTitle, InnerPageWrapper } from 'elements';
import {
	CreateAppointmentWrapper,
	CreateAppointmentFormWrapper,
	ButtonWrapper,
} from './style';
import { Button } from 'components';
import {
	getSpecializations,
	getSpecializationsSelector,
	getDoctorsBySpecialtyID,
	getDoctorsSelector,
	getAvailableAppointments,
	getAvailableAppointmentsSelector,
	resetForm,
} from './redux';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useFormik } from 'formik';
import { createAppointmentFormSchema as validationSchema } from 'modules';
import { SelectDate, SelectDoctor } from './components';

export const CreateAppointment = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getSpecializations());
	}, [dispatch]);

	const specializations = useAppSelector(getSpecializationsSelector);
	const doctors = useAppSelector(getDoctorsSelector);
	const availableAppointments = useAppSelector(
		getAvailableAppointmentsSelector
	);

	const formik = useFormik({
		initialValues: {
			date: new Date(),
			reason: '',
			note: '',
			doctorID: '',
		},
		validationSchema,
		onSubmit: values => {
			console.log(values);
		},
	});

	const specialtyOnChange = useCallback(
		option => {
			dispatch(resetForm());
			dispatch(getDoctorsBySpecialtyID(option.value));
		},
		[dispatch]
	);

	const doctorOnChange = useCallback(
		(option: { value: string }) => {
			dispatch(
				getAvailableAppointments({
					doctorID: option.value,
					date: formik.getFieldProps('date').value,
				})
			);
			formik.setFieldValue('doctorID', option.value);
		},
		[formik, dispatch]
	);

	const dateOnChange = useCallback(
		date => {
			if (formik.getFieldProps('doctorID').value) {
				dispatch(
					getAvailableAppointments({
						doctorID: formik.getFieldProps('doctorID').value,
						date,
					})
				);
			}

			formik.setFieldValue('date', date);
		},
		[formik, dispatch]
	);

	return (
		<InnerPageWrapper>
			<CreateAppointmentWrapper>
				<MakeAppointmentHeaderTitle>
					Make an appointment
				</MakeAppointmentHeaderTitle>
				<CreateAppointmentFormWrapper onSubmit={formik.handleSubmit}>
					<SelectDoctor
						handleChange={formik.handleChange}
						specializationsSelectOptions={specializations}
						doctorsSelectOptions={doctors}
						doctorOnChangeHandler={doctorOnChange}
						specialtyOnChangeHandler={specialtyOnChange}
					/>
					<SelectDate
						selected={formik.getFieldProps('date').value}
						dateOnChange={dateOnChange}
						availableAppointments={availableAppointments}
					/>
					<ButtonWrapper>
						<Button type='submit'>Submit</Button>
					</ButtonWrapper>
				</CreateAppointmentFormWrapper>
			</CreateAppointmentWrapper>
		</InnerPageWrapper>
	);
};

export * from './redux';