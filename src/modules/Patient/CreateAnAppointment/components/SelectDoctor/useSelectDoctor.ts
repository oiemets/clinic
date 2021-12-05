import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSpecializations,
	getSpecializationsSelector,
	getDoctorsBySpecialty,
	getDoctorsSelector,
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

export type UseSelectDoctorData = {
	options: SelectDoctor[];
	value: string;
	onChange: FormikHandlers['handleChange'];
};

export const useSelectDoctor = (
	handleChange: FormikHandlers['handleChange']
): UseSelectDoctorData[] => {
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
			dispatch(getDoctorsBySpecialty(e.target.value));
			handleChange(e);
		},
		[dispatch, handleChange]
	);

	const doctorsOnChange = useCallback(
		e => {
			setDoctorID(e.target.value);
			handleChange(e);
		},
		[handleChange]
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
