import { useEffect, useCallback, useState } from 'react';
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
	submitCreateAppointmentForm,
} from './redux';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useFormik } from 'formik';
import { createAppointmentFormSchema as validationSchema } from 'modules';
import { SelectDate, SelectDoctor } from './components';
import { useNavigate } from 'react-router-dom';
import { isSameDay } from 'date-fns';

export type FieldsValues = {
	date: Date;
	reason: string;
	note: string;
	doctorID: string;
};

export type SelectValueType = {
	value: string;
	label: string;
} | null;

export const CreateAppointment = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getSpecializations());
	}, [dispatch]);

	const [doctorSelectValue, setDoctorSelectValue] =
		useState<SelectValueType>(null);

	const [specialtySelectValue, setSpecialtySelectValue] =
		useState<SelectValueType>(null);

	const specializations = useAppSelector(getSpecializationsSelector);
	const doctors = useAppSelector(getDoctorsSelector);
	const availableAppointments = useAppSelector(
		getAvailableAppointmentsSelector
	);

	const formik = useFormik<FieldsValues>({
		initialValues: {
			date: new Date(),
			reason: '',
			note: '',
			doctorID: '',
		},
		validationSchema,
		onSubmit: values => {
			dispatch(submitCreateAppointmentForm({ values, navigate }));
		},
	});

	const specialtyOnChange = useCallback(
		option => {
			if (formik.getFieldProps('doctorID').value !== '') {
				formik.setFieldValue('doctorID', '');
				setDoctorSelectValue(null);
				dispatch(resetForm());
			}
			if (specialtySelectValue?.value !== option.value) {
				dispatch(getDoctorsBySpecialtyID(option.value));
			}
			setSpecialtySelectValue(option);
		},
		[dispatch, formik, specialtySelectValue]
	);

	const doctorOnChange = useCallback(
		(option: { value: string; label: string }) => {
			dispatch(
				getAvailableAppointments({
					doctorID: option.value,
					date: formik.getFieldProps('date').value,
				})
			);
			setDoctorSelectValue(option);
			formik.setFieldValue('doctorID', option.value);
		},
		[formik, dispatch]
	);

	const dateOnChange = useCallback(
		date => {
			if (
				formik.getFieldProps('doctorID').value &&
				!isSameDay(date, formik.getFieldProps('date').value)
			) {
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
						doctorSelectValue={doctorSelectValue}
						specialtySelectValue={specialtySelectValue}
						errors={formik.errors}
						touched={formik.touched}
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
