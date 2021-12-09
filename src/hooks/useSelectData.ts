import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSpecializations,
	getSpecializationsSelector,
	getDoctorsBySpecialty,
	getDoctorsSelector,
	setSelectedDoctorID,
	setAvailableAppointments,
	resetWizardFormValues,
} from 'modules';
import { FormikHandlers } from 'formik';
import { SelectDoctor } from 'components';

const indexOptionSpecialtySelect = {
	id: '',
	specializationName: 'Select doctor specialty',
};
const indexOptionDoctorsSelect = {
	id: '',
	firstName: 'Choose your doctor',
	lastName: '',
};

export type UseSelectDataType = {
	options: SelectDoctor[];
	value: string;
	onChange: FormikHandlers['handleChange'];
};

export const useSelectData = (
	handleChange: FormikHandlers['handleChange']
): UseSelectDataType[] => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSpecializations());
	}, [dispatch]);

	const specializations = useSelector(getSpecializationsSelector);
	const doctors = useSelector(getDoctorsSelector);

	const [specialty, setSpecialty] = useState('');
	const [doctorID, setDoctorID] = useState('');

	const specialtyOptions = [indexOptionSpecialtySelect, ...specializations].map(
		s => ({
			value: s.id,
			text: s.specializationName,
		})
	);
	const doctorsOptions = useMemo(() => {
		let result = [...doctors];
		if (specialty.length === 0) {
			result = [];
		}
		return result.length === 0 ? result : [indexOptionDoctorsSelect, ...result];
	}, [doctors, specialty]).map(d => ({
		value: d.id,
		text: `${d.firstName} ${d.lastName}`,
	}));

	const specialtyOnChange = useCallback(
		e => {
			setSpecialty(e.target.value);
			if (!e.target.value === Boolean('')) {
				dispatch(getDoctorsBySpecialty(e.target.value));
			}
			if (e.target.value === '') {
				dispatch(resetWizardFormValues());
			}
			handleChange(e);
		},
		[dispatch, handleChange]
	);

	const doctorsOnChange = useCallback(
		e => {
			setDoctorID(e.target.value);
			handleChange(e);

			if (e.target.value === '') {
				dispatch(setAvailableAppointments([]));
			}

			dispatch(setSelectedDoctorID(e.target.value));
		},
		[dispatch, handleChange]
	);

	return [
		{
			options: specialtyOptions,
			value: specialty,
			onChange: specialtyOnChange,
		},
		{
			options: doctorsOptions,
			value: doctorID,
			onChange: doctorsOnChange,
		},
	];
};
