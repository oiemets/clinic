import { useEffect } from 'react';
import { MakeAppointmentHeaderTitle, InnerPageWrapper } from 'elements';
import {
	CreateAppointmentWrapper,
	CreateAppointmentFormWrapper,
	ButtonWrapper,
	SelectDoctorContainer,
} from './style';
import { Button, Select, TextField } from 'components';
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
import { SelectDate, SelectHeader } from './components';
import { useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export type FieldsValues = {
	specialty: SelectValueType;
	doctorID: SelectValueType;
	date: Date;
	reason: string;
	note: string;
};

export type SelectValueType = {
	value: string;
	label: string;
} | null;

export const CreateAppointment = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const specializations = useAppSelector(getSpecializationsSelector);
	const doctors = useAppSelector(getDoctorsSelector);
	const availableAppointments = useAppSelector(
		getAvailableAppointmentsSelector
	);

	const {
		control,
		register,
		formState: { errors },
		watch,
		getValues,
		resetField,
		handleSubmit,
	} = useForm<FieldsValues>({
		defaultValues: {
			specialty: null,
			doctorID: null,
			date: new Date(),
			reason: '',
			note: '',
		},
	});
	const onSubmit: SubmitHandler<FieldsValues> = ({
		date,
		doctorID,
		reason,
		note,
	}) =>
		dispatch(
			submitCreateAppointmentForm({
				values: { date, doctorID: doctorID?.value ?? '', reason, note },
				navigate,
			})
		);

	useEffect(() => {
		dispatch(getSpecializations());
	}, [dispatch]);

	useEffect(() => {
		const subscription = watch((data, { name }) => {
			if (name === 'specialty' && data.specialty?.value) {
				dispatch(getDoctorsBySpecialtyID(data.specialty?.value));
				if (getValues('doctorID')?.value !== '') {
					resetField('doctorID');
					dispatch(resetForm());
				}
			}
			if (
				(name === 'doctorID' && data.doctorID?.value && data.date) ||
				(name === 'date' && data.doctorID?.value && data.date)
			) {
				dispatch(
					getAvailableAppointments({
						doctorID: data.doctorID?.value,
						date: data.date,
					})
				);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, dispatch, getValues, resetField]);

	return (
		<InnerPageWrapper>
			<CreateAppointmentWrapper>
				<MakeAppointmentHeaderTitle>
					Make an appointment
				</MakeAppointmentHeaderTitle>
				<CreateAppointmentFormWrapper onSubmit={handleSubmit(onSubmit)}>
					<SelectDoctorContainer>
						<SelectHeader
							number='1'
							title='Select a doctor and define the reason for your visit'
						/>
						<Controller
							control={control}
							name='specialty'
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									title='Occupation'
									placeholder='Select specialty'
									options={specializations}
									onChange={field.onChange}
									errorMessage={
										errors.specialty && 'This field cannot be empty'
									}
								/>
							)}
						/>
						<Controller
							control={control}
							name='doctorID'
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									title="Doctor's Name"
									placeholder='Select doctor'
									options={doctors}
									onChange={field.onChange}
									value={getValues('doctorID')}
									errorMessage={errors.doctorID && 'This field cannot be empty'}
								/>
							)}
						/>
						<TextField
							title='Reason for the visit'
							{...register('reason', { required: true })}
							errorMessage={errors.reason && 'This field cannot be empty'}
						/>
						<TextField title='Note' {...register('note')} />
					</SelectDoctorContainer>
					<Controller
						control={control}
						name='date'
						render={({ field }) => (
							<SelectDate
								selected={field.value}
								dateOnChange={field.onChange}
								availableAppointments={availableAppointments}
							/>
						)}
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
